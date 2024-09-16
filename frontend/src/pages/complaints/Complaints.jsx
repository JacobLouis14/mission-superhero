import React, { useState } from "react";
import Appbar from "../../components/common/Appbar";
import { createGrivenceApi } from "../../services/allapi";

const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",
    grievance: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  //   submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, grievance } = complaintData;
    if (!name || !email || !grievance) {
      alert("Fill up the data");
      return;
    }

    const res = await createGrivenceApi({
      data: complaintData,
    });
    if (res.status != 200) {
      alert("error in creation");
      return;
    }

    setComplaintData({
      name: "",
      email: "",
      complaint: "",
    });
    setIsSubmit(true);
  };

  return (
    <div className="h-screen bg-black text-white ">
      <Appbar />
      {/* form wrapper */}
      {!isSubmit && (
        <div className="w-full h-4/5 flex justify-center items-center">
          <form
            className="flex flex-col px-5 w-5/6"
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
      {isSubmit && (
        <div className="h-3/4 flex flex-col justify-center align-middle px-40">
          <button
            onClick={() => {
              setIsSubmit(false);
            }}
            className="px-5 py-3 bg-yellow-900 rounded-lg font-PG tracking-widest"
          >
            Submit Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Complaints;
