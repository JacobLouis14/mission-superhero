import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  return (
    <div className="flex py-5 px-4 border-b-2">
      {!isSideBarOpen && (
        <button className="sm:hidden" onClick={() => setIsSideBarOpen(true)}>
          <MenuIcon />
        </button>
      )}
      <h5 className="text-yellow-800 font-PG mx-auto text-2xl">
        Welcome Cheif
      </h5>
    </div>
  );
};

export default Appbar;
