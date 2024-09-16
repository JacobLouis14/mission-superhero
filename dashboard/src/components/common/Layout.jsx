import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="flex bg-gray-100 text-gray-600">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="sm:ms-60 w-full">
        <Appbar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
