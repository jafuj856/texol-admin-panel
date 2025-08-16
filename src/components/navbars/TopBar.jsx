import { User } from "lucide-react";
import React, { useState, useEffect, useRef, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(mobileNavRef);

      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed bg-white gap-5 shadow w-full left-0 right-0 top-0 z-40 transition-all duration-300 px-[20px] md:px-[50px] lg:px-[100px] p-[15px] capitalize text-white flex items-center justify-end`}
    >
      <User />
    </div>
  );
}

export default TopBar;

// Forward the ref to the MobileNav component
const MobileNav = React.forwardRef(({ path, navigate }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute w-[200px] p-3 bg-black/30 right-3 top-6"
      onClick={(e) => e.stopPropagation()} // Prevent click event from propagating
    >
      <div className="flex flex-col items-center gap-3 lg:gap-[30px]">
        <p
          onClick={() => navigate("/")}
          className={`${
            path === "/" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          Home
        </p>
        <p
          onClick={() => navigate("/about")}
          className={`${
            path === "/about" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          About Us
        </p>
        <p
          onClick={() => navigate("/Categories")}
          className={`${
            path === "/Categories" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          Categories
        </p>
        <p
          onClick={() => navigate("/OurWorks")}
          className={`${
            path === "/OurWorks" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          Our Works
        </p>
        <p
          onClick={() => navigate("/FAQ")}
          className={`${
            path === "/FAQ" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          FAQ
        </p>
        <p
          onClick={() => navigate("/cart")}
          className={`${
            path === "/cart" && "text-commonColor underline"
          } font-urbanist font-[100] text-[18px] cursor-pointer`}
        >
          Cart
        </p>
      </div>
    </div>
  );
});
