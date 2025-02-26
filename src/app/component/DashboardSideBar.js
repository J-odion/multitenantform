"use client";
import Image from "next/image";
import { LuHome } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSelectedSavings } from "../libs/features/authSlice";

const menuOptions = {
  datadog: {
    label: "Datadog",
    icon: "/assets/datadog-48.svg",
    subMenus: [
      "Custom Metrics",
      "Instances",
      "Indexed Spans",
      "Ingested Spans",
      "Profiling hosts",
      "Browser Tests",
    ],
  },
  newrelic: {
    label: "New Relic",
    icon: "/assets/new-relic-48.svg",
    subMenus: ["User Costs", "RUM Costs"],
  },
  aws: {
    label: "AWS Savings",
    icon: "/assets/aws-48.svg",
    subMenus: ["Cloudwatch Put", "Cloudwatch Stream"],
  },
};

const DashboardSideBar = ({ setSelectedMenu }) => {
  const dispatch = useDispatch();
  const selectedSavings = useSelector((state) => state.auth.selectedSavings);

  useEffect(() => {
    const savedSavings = localStorage.getItem("selectedSavings");
    if (savedSavings) {
      dispatch(setSelectedSavings(savedSavings));
    }
  }, [dispatch]);

  return (
    <div className="w-full h-full rounded-t-lg text-white flex flex-col relative items-left gap-4 bg-[#F9F4F440]">
      <div className="w-full h-full flex relative flex-col gap-4 mb-5 top-0">
        <div className="border-white p-6 border-b border-dashed w-full">
          <p className="text-white font-medium text-xs">Cost Saving Dashboard</p>
        </div>

        <div className="bg-none text-white w-[80%] h-full mx-auto flex flex-col gap-4">
          <div className="flex gap-4 justify-start items-center cursor-pointer" onClick={() => setSelectedMenu(null)}>
            <div className="bg-[#4a4a4b] rounded p-1">
              <LuHome size={12} />
            </div>
            <p>All Savings</p>
          </div>

          {selectedSavings && menuOptions[selectedSavings] && (
            <div>
              <div className="flex gap-4 justify-start items-center">
                <div className="rounded p-1">
                  <Image
                    src={menuOptions[selectedSavings].icon}
                    width={20}
                    height={20}
                    alt={`${menuOptions[selectedSavings].label} Logo`}
                  />
                </div>
                <p className="text-white">{menuOptions[selectedSavings].label}</p>
              </div>

              <div className="w-full flex gap-4 flex-col pl-8">
                {menuOptions[selectedSavings].subMenus.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMenu(item)}
                    className="text-white text-left"
                  >
                    {item}
                  </button>
                ))}

                {/* Settings Menu Item */}
                <button
                  onClick={() => setSelectedMenu("Settings")}
                  className="text-white text-left mt-4 border-t border-gray-500 pt-2"
                >
                  Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
