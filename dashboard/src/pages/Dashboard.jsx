import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import {
  getGrievance,
  greivanceSearchApiHandler,
  grievanceFilterApiHandler,
} from "../services/allApi";
import { AuthContext } from "../context/Authprovider";

const Dashboard = () => {
  const { authData } = useContext(AuthContext);
  const [greivances, setGreivances] = useState([]);
  const [pagination, setpagination] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("");

  // greivance api
  const greivanceApiHandler = async () => {
    const tokenToSend = authData.token
      ? authData.token
      : sessionStorage.getItem("token");
    const res = await getGrievance({ currentPage: selectedPage, tokenToSend });
    if (res.status < 200 || res.status >= 300) {
      alert("Error in accessing grievance");
      return;
    }
    // console.log(res);
    setpagination(() => {
      let returnArr = [];
      for (let index = 1; index <= res?.data?.totalPages; index++) {
        returnArr.push(index);
      }
      return returnArr;
    });
    setGreivances(res.data.data);
  };

  // greivance search api
  const greivanceSearchApi = async () => {
    try {
      const tokenToSend = authData.token
        ? authData.token
        : sessionStorage.getItem("token");

      const res = await greivanceSearchApiHandler({ searchValue, tokenToSend });
      if (res.status < 200 || res.status >= 300) {
        alert("Error in accessing grievance");
        return;
      }
      setpagination([]);
      setGreivances(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // greivance filter api
  const greivanceFilterApi = async (e) => {
    try {
      const filterValue = e?.target.value;
      const tokenToSend = authData.token
        ? authData.token
        : sessionStorage.getItem("token");

      const res = await grievanceFilterApiHandler({
        filterValue: filterValue ? filterValue : filter,
        currentPage: selectedPage,
        tokenToSend,
      });
      if (res.status < 200 || res.status >= 300) {
        alert("Error in accessing grievance");
        return;
      }
      setpagination(() => {
        let returnArr = [];
        for (let index = 1; index <= res?.data?.totalPages; index++) {
          returnArr.push(index);
        }
        return returnArr;
      });
      setGreivances(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filter) {
      greivanceFilterApi();
    } else {
      greivanceApiHandler();
    }
  }, [selectedPage, !searchValue]);

  return (
    <Layout>
      <div className="min-h-dvh p-4 overflow-x-scroll mt-20">
        {/* filter section */}
        <div className="flex flex-col sm:flex-row">
          <div className="flex w-full sm:w-3/4">
            <input
              type="text"
              placeholder="search"
              className="p-2 outline-none rounded-md w-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="ms-3 w-20 p-2 rounded-md bg-yellow-900 text-white"
              onClick={greivanceSearchApi}
              disabled={!searchValue}
            >
              Search
            </button>
          </div>
          <select
            defaultValue={"none"}
            onChange={(e) => {
              setFilter(e.target.value), greivanceFilterApi(e);
            }}
            className="w-3/4 rounded-md p-2 outline-none sm:w-1/4 mt-4 sm:mt-0 sm:ms-4 block bg-gray-500 text-white border-0"
          >
            <option value="none" disabled>
              select filter
            </option>
            <option value="filterbydatedec">By date Dec</option>
            <option value="filterbydateinc">By date Inc</option>
          </select>
        </div>

        {/*  */}
        {greivances?.length < 1 && (
          <p className="text-center mt-10">No greivance</p>
        )}
        {greivances?.length > 0 && (
          <div>
            {/* table */}
            <table className="mt-20 shadow-md w-full min-w-96">
              <thead className="border-b">
                <tr className="">
                  <th className="w-1/4">Name</th>
                  <th className="w-1/4">Email</th>
                  <th className="w-2/4">Grievance</th>
                </tr>
              </thead>
              <tbody>
                {greivances?.map((greivance, index) => (
                  <tr key={index}>
                    <td className="w-1/4 p-2 text-center">{greivance?.name}</td>
                    <td className="w-1/4 p-2 text-center">
                      {greivance?.email}
                    </td>
                    <td className="w-2/4 p-3 text-start">
                      {greivance?.grievance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {pagination && (
              <div className="mt-16 flex sm:justify-center">
                <div className="flex  min-w-56 overflow-x-scroll py-3 px-5">
                  {pagination?.map((pageNumber, index) => (
                    <button
                      key={index}
                      className={`border-2 py-2 px-4 rounded-full me-3 ${
                        selectedPage === pageNumber &&
                        "bg-yellow-800 text-white"
                      } font-semibold`}
                      onClick={() => setSelectedPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
