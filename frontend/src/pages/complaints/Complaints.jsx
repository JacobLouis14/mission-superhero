import React, { useState } from "react";
import Appbar from "../../components/common/Appbar";
import { createGrivenceApi } from "../../services/allapi";
import emailjs from "@emailjs/browser";
import Loading from "../../components/common/Loading";

const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",
    grievance: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //   submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, grievance } = complaintData;
    if (!name || !email || !grievance) {
      alert("Fill up the data");
      return;
    }
    setIsLoading(true);

    const res = await createGrivenceApi({
      data: complaintData,
    });
    if (res.status != 200) {
      alert("error in creation");
      return;
    }

    // mail
    const mailRes = await emailjs.send(
      "superhero_email",
      "template_621bjqn",
      { to_name: "hero", from_name: name, message: "check out dashboard" },
      { publicKey: "BxeM23br_RMJIWcvZ" }
    );
    if (mailRes.status != 200) {
      console.log("Error in mail sending");
    }

    setComplaintData({
      name: "",
      email: "",
      complaint: "",
    });
    setIsLoading(false);
    setIsSubmit(true);
  };

  return (
    <div className="h-screen bg-[url(/complient-bg.jpg)] bg-cover text-white ">
      <div className="bg-gradient-radial from-transparent to-black h-full">
        <Appbar />
        {/* form wrapper */}
        {!isSubmit && !isLoading && (
          <div className="w-full h-4/5 flex justify-center items-center">
            <form
              className="flex flex-col w-5/6"
              onSubmit={(e) => submitHandler(e)}
            >
              <input
                type="text"
                placeholder="Name"
                value={complaintData.name}
                onChange={(e) =>
                  setComplaintData({ ...complaintData, name: e.target.value })
                }
                className="outline-none px-4 text-black rounded-md h-10 w-full md:w-96 mb-4"
              />
              <input
                type="text"
                placeholder="Email"
                value={complaintData.email}
                onChange={(e) =>
                  setComplaintData({ ...complaintData, email: e.target.value })
                }
                className="outline-none px-4 text-black rounded-md h-10 w-full md:w-96 mb-4"
              />
              <textarea
                placeholder="what you faceing"
                rows={5}
                value={complaintData.grievance}
                onChange={(e) =>
                  setComplaintData({
                    ...complaintData,
                    grievance: e.target.value,
                  })
                }
                className="outline-none px-4 py-2 text-black rounded-md mb-4"
              />
              <button className="ms-auto bg-yellow-900 py-3 px-5 rounded-lg font-PG tracking-widest">
                Submit
              </button>
            </form>
          </div>
        )}
        {isSubmit && !isLoading && (
          <div className="h-3/4 flex flex-col justify-center items-center px-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="mb-3"
            >
              <path
                fill="#c8e6c9"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></path>
              <path
                fill="#4caf50"
                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
              ></path>
            </svg>
            <button
              onClick={() => {
                setIsSubmit(false);
              }}
              className="px-5 py-3 w-full bg-yellow-900 rounded-lg font-PG tracking-widest"
            >
              Submit Another
            </button>
          </div>
        )}
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default Complaints;
