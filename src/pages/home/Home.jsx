import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../../components/navbars/TopBar";
import SideBar from "../../components/navbars/SideBar";

function Home() {
  const path = useLocation().pathname;

  return (
    <div>
      <SideBar />
      <TopBar />
      <main className="sm:ml-[248px]  ml-0 text-black transition-all duration-1000 ease-out ">
        <section className="mt-[80px] p-[10px] sm:p-[37px] transition-all duration-1000 ease-out relative z-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Home;
