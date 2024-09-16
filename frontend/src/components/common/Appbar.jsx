import React, { useState } from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:flex text-white p-6 bg-gray-900/30 backdrop-blur-sm rounded-b">
      <div className="flex">
        <h2>logo</h2>
        {/* button */}
        <div className="sm:hidden ms-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      {/* menus */}
      <div className={`ms-auto ${isOpen ? "block mt-8" : "hidden"} sm:flex`}>
        <Link to="/">
          <h6 className="mr-8 sm:mr-10 hover:cursor-pointer hover:bg-yellow-600 sm:hover:bg-inherit sm:hover:text-yellow-600 p-2 sm:p-0 rounded">
            Home
          </h6>
        </Link>
        <h6 className="mr-8 sm:mr-10 hover:cursor-pointer hover:bg-yellow-600 sm:hover:bg-inherit sm:hover:text-yellow-600 p-2 sm:p-0 rounded">
          About
        </h6>
        <Link to="/complaints">
          <h6 className="mr-8 sm:mr-10 hover:cursor-pointer hover:bg-yellow-600 sm:hover:bg-inherit sm:hover:text-yellow-600 p-2 sm:p-0 rounded">
            compalint
          </h6>
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;
