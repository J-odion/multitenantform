"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSavings } from "../libs/features/authSlice";


const Onboarding = ({ toggleForm }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get selected savings option from Redux state
  const selectedSavings = useSelector((state) => state.auth.selectedSavings);
  
  // Available cost-saving options
  const savingsOptions = [
    { id: "datadog", label: "Datadog Cost Savings" },
    { id: "newrelic", label: "New Relic Cost Savings" },
    { id: "aws", label: "AWS Cost Savings" },
  ];

  // Function to handle checkbox selection
  const handleSelection = (id) => {
    dispatch(setSelectedSavings(id))
    localStorage.setItem("selectedSavings", id);
  };
  
  // Function to handle form submission and redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSavings) {
      router.push("/appdata"); // Redirect to /appdata
    }
  };

  return (
    <div className="container p-4">
      <div className="inset-0 flex justify-center items-center">
        <div className="bg-white flex flex-col space-y-6 p-6 rounded-lg w-3/4 md:w-2/4 lg:w-2.2/4 ">
          <h2 className="text-2xs font-bold mb-4">Org - name Onboarding</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {savingsOptions.map((option) => (
              <div key={option.id} className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="costSavings"
                    checked={selectedSavings === option.id}
                    onChange={() => handleSelection(option.id)}
                    className="active:bg-[#6358DC]"
                  />
                  <label htmlFor={option.id} className="block">
                    {option.label}
                  </label>
                </div>

                {/* Conditionally enable button based on selection */}
                <button
                  type="button"
                  onClick={toggleForm}
                  className={`block w-5/6 text-white py-2 text-xs mx-auto rounded-sm ${
                    selectedSavings === option.id ? "bg-[#6358DC] hover:text-white" : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={selectedSavings !== option.id}
                >
                  {option.id === "aws" ? "Access Key" : "API Key"}
                </button>

                {/* Additional button for AWS */}
                {option.id === "aws" && (
                  <button
                    type="button"
                    onClick={toggleForm}
                    className={`block w-5/6 text-white py-2 text-xs mx-auto rounded-sm ${
                      selectedSavings === option.id ? "bg-[#6358DC] hover:text-white" : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={selectedSavings !== option.id}
                  >
                    Secret Key
                  </button>
                )}
              </div>
            ))}

            {/* Save Button */}
            <div className="text-right">
              <button
                type="submit"
                className={`block w-full text-xs mt-4 mx-auto text-white px-4 py-3 rounded ${
                  selectedSavings ? "bg-[#6358DC]" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!selectedSavings}
              >
                Save & Calculate Cost Savings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
