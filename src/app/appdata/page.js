"use client"
import { useState } from "react";
import DashboardSideBar from "../component/DashboardSideBar";
import Navbar from "../component/Header";
import Subcat from "../component/Subcat";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full bg-[#988D8D] flex h-[100vh] overflow-x-hidden">
        <div className="w-1/6">
          <DashboardSideBar setSelectedMenu={setSelectedMenu} />
        </div>
        <div className="w-full h-full">
          <Subcat selectedMenu={selectedMenu} />
        </div>
      </div>
    </>
  );
}
