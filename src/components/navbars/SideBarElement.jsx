import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideBarElement({ text, icon, path }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const isActive = location === path;

  const handleClick = () => {
    if (text === "Logout") {
      setIsLogoutModalOpen(true);
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLogoutModalOpen(false);

    // cookieLogout();
    console.log("Logging out...");
    console.log("Sending logout message to parent...");
    window.parent.postMessage("logout", "*");
    navigate("/auth");
  };

  return (
    <>
      <li
        // onClick={() => { navigate(path) }}
        onClick={handleClick}
        className="flex relative items-center pl-9 h-[50px] w-full gap-3  font-urbanist text-[16px] font-[400] cursor-pointer"
        style={{
          // backgroundColor: path === location && "#FFF5E0",
          // opacity: path === location ? "1" : "0.6",
          backgroundColor: isActive && "#FFF5E0",
          color: isActive ? "#C1A875" : "#000000",
          opacity: isActive ? "1" : "0.6",
        }}
      >
        {isActive && (
          <div className="absolute left-0 h-full w-1 bg-buttonColor" />
        )}
        {icon}
        <p>{text}</p>
      </li>
    </>
  );
}

export default SideBarElement;
