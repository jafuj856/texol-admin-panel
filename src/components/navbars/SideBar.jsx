import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { openSidebar } from "../../redux/feature/navBarSlice";
import SideBarElement from "./SideBarElement";

function SideBar() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state?.navbar?.toggleSidebar);
  const activeColor = "#ff7a00";

  return (
    <div
      className={`
  sidebar 
 max-h-screen
  transition-all 
  duration-1000 
  ease-out 
  fixed 
  h-full 
  left-0 
  top-0 
  bottom-0 
   z-50 
   bg-white shadow
 sm:w-[248px]
  ${isSidebarOpen ? "w-[248px]" : "w-0"}
  
`}
    >
      {/* coleseOpeButtons */}
      <div
        onClick={(e) => {
          e.preventDefault();
          dispatch(openSidebar());
        }}
        style={{ right: isSidebarOpen ? "10px" : "-55px" }}
        className={`absolute -right-14 top-2 transition-all   duration-1000 ease-out sm:hidden  z-10 border border-buttonColor flex  items-center border-buttonYellow rounded-md ${
          isSidebarOpen ? "h-8 w-8" : " w-12 h-10"
        } p-2 cursor-pointer`}
      >
        {!isSidebarOpen ? (
          <div className=" w-full h-full ">
            <div className="w-[100%] bg-buttonColor rounded-sm h-1 mb-1 "></div>
            <div className="w-full bg-buttonColor rounded-sm h-1 mb-1"></div>
            <div className="w-full bg-buttonColor rounded-sm h-1 "></div>
          </div>
        ) : (
          <span className="absolute z-50 text-xl text-buttonColor  cursor-pointer">
            X
          </span>
        )}
      </div>

      {/* coleseOpeButtons */}
      <div
        className={`
  sidebar 
 max-h-screen
  transition-all 
  duration-1000 
  ease-out 
  
  h-full 
  left-0 
  top-0 
  overflow-y-auto
  bottom-0 
   z-50 
 sm:w-[248px]
  ${isSidebarOpen ? "w-[248px]" : "w-0"}
  `}
      >
        {/* logo */}
        <div className="h-[80px] leading-[30.41px] w-full flex items-center -ml-2 justify-center  text-buttonColor ">
          <img src="/iconText.png" className="max-h-10" alt="" />
        </div>
        {/* logo */}
        {/* navLinks */}
        <ul className="w-full font-urbanist text-[16px] flex flex-col gap-3 mt-10">
          <SideBarElement
            path={"/"}
            text={"Dashboard"}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6.63415C2 4.07478 4.07478 2 6.63415 2C9.19351 2 11.2683 4.07478 11.2683 6.63415C11.2683 9.19351 9.19351 11.2683 6.63415 11.2683C4.07478 11.2683 2 9.19351 2 6.63415Z"
                  fill={
                    location === "/" || location === "/EnquireDetails"
                      ? activeColor
                      : ""
                  }
                  stroke={
                    location === "/" || location === "/EnquireDetails"
                      ? ""
                      : "black"
                  }
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7317 17.3659C12.7317 14.8065 14.8065 12.7317 17.3659 12.7317C19.9252 12.7317 22 14.8065 22 17.3659C22 19.9252 19.9252 22 17.3659 22C14.8065 22 12.7317 19.9252 12.7317 17.3659Z"
                  fill={
                    location === "/" || location === "/EnquireDetails"
                      ? activeColor
                      : ""
                  }
                  stroke={
                    location === "/" || location === "/EnquireDetails"
                      ? ""
                      : "black"
                  }
                />
                <path
                  d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z"
                  fill={
                    location === "/" || location === "/EnquireDetails"
                      ? activeColor
                      : ""
                  }
                  stroke={
                    location === "/" || location === "/EnquireDetails"
                      ? ""
                      : "black"
                  }
                />
                <path
                  d="M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z"
                  fill={
                    location === "/" || location === "/EnquireDetails"
                      ? activeColor
                      : ""
                  }
                  stroke={
                    location === "/" || location === "/EnquireDetails"
                      ? ""
                      : "black"
                  }
                />
              </svg>
            }
          />
          <SideBarElement
            text="Add Product"
            path="/add-product"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z"
                  stroke={
                    location === "/admin/products" ||
                    location === "/admin/product-detail" ||
                    location === "/admin/add-products"
                      ? activeColor
                      : "black"
                  }
                  fill={
                    location === "/admin/products" ||
                    location === "/admin/product-detail" ||
                    location === "/admin/add-products"
                      ? activeColor
                      : ""
                  }
                />
                <path
                  d="M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12"
                  stroke={
                    location === "/admin/products" ||
                    location === "/admin/product-detail" ||
                    location === "/admin/add-products"
                      ? activeColor
                      : "black"
                  }
                  stroke-linecap="round"
                />
                <path
                  d="M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16"
                  stroke={
                    location === "/admin/products" ||
                    location === "/admin/product-detail" ||
                    location === "/admin/add-products"
                      ? activeColor
                      : "black"
                  }
                  stroke-linecap="round"
                />
              </svg>
            }
          />
          <SideBarElement
            path={""}
            text={"Logout"}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2V6" stroke="#1C274C" stroke-linecap="round" />
                <path
                  d="M8.5 3.70593C5.26806 5.07145 3 8.27087 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.27087 18.7319 5.07145 15.5 3.70593"
                  stroke="#1C274C"
                  stroke-linecap="round"
                />
              </svg>
            }
          />
        </ul>
        {/* navLinks */}
      </div>
    </div>
  );
}

export default SideBar;
