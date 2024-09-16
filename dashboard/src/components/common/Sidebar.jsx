import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authprovider";

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  const sideBarMenu = [
    {
      icon: <FormatListBulletedIcon />,
      title: "Grievance",
      nav: "/dashboard",
    },
    // {
    //   icon: <FormatListBulletedIcon />,
    //   title: "Admin",
    //   nav: "/dashboard/admin",
    // },
  ];
  const [selectedMenu, setSelectedMenu] = useState(0);

  // logout handler
  const logoutHandler = () => {
    setAuthData({ token: "" });
    sessionStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div
      className={`fixed ${
        isSideBarOpen ? "left-0" : "-left-60"
      }  sm:left-0 h-screen border w-60 flex flex-col font-PG py-4 px-3 bg-gray-100`}
    >
      <button
        className="sm:hidden ms-auto"
        onClick={() => setIsSideBarOpen(false)}
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col justify-between h-full mt-16">
        <div>
          {sideBarMenu.map((menu, index) => (
            <Link key={index} to={menu.nav}>
              <button
                className={`w-full flex px-3 mb-4 py-3 border rounded-lg border-yellow-800 ${
                  selectedMenu === index && "bg-yellow-800 text-white"
                }`}
              >
                {menu.icon}
                <p className="tracking-wider ms-4">{menu.title}</p>
              </button>
            </Link>
          ))}
        </div>
        <div>
          <button
            className={`w-full flex px-3 mb-4 py-3 border rounded-lg border-yellow-800 hover:bg-yellow-900 hover:text-white`}
            onClick={logoutHandler}
          >
            {/* {menu.icon} */}
            <p className="tracking-wider ms-4">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
