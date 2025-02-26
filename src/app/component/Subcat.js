"use client";
import React from "react";
import CustomMetrics from "./CustomMetrics";
import Instances from "./Instances";
import IndexedSpans from "./IndexedSpans";
import IngestedSpans from "./IngestedSpans";
import ProfilingHosts from "./ProfilingHosts";
import BrowserTests from "./BrowserTests";
import UserCosts from "./UserCosts";
import RUMCosts from "./RUMCosts";
import CloudwatchPut from "./CloudwatchPut";
import ClouldwatchStream from "./CloudwatchStream";
import Settings from "./Settings";


// Map menu names to components
const componentMap = {
  "Custom Metrics": CustomMetrics,
  "Instances": Instances,
  "Indexed Spans": IndexedSpans,
  "Ingested Spans": IngestedSpans,
  "Profiling hosts": ProfilingHosts,
  "Browser Tests": BrowserTests,
  "User Costs": UserCosts,
  "RUM Costs": RUMCosts,
  "Cloudwatch Put": CloudwatchPut,
  "Cloudwatch Stream": ClouldwatchStream,
  "Settings": Settings,
};

export default function Subcat({ selectedMenu }) {
  const SelectedComponent = componentMap[selectedMenu] || null;

  return (
    <section className="py-[26px] bg-[#988D8D] gap-y-[14px] w-full lg:w-[1280px] text-[12px] flex flex-col mx-auto items-start">
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <p className="text-white text-xl">Select a menu item to view details</p>
      )}
    </section>
  );
}
