"use client";
import React, { useState, useEffect } from "react";
// import { fetchAllInventory } from "../utils/Apis";

const InventoryData = () => {
  const [users, setUsers] = useState([
    {"name": "Lindsey Strud", "email": 'lindsey.strud@metricezero.com', "role":"admin"},
    {"name": "John Strud", "email": 'john.strud@metricezero.com', "role":"admin"},
    {"name": "Serah Strud", "email": 'serah.strud@metricezero.com', "role":"admin"},
    {"name": "Micheal Owen", "email": 'micheal.owen@metricezero.com', "role":"admin"},
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reports using the utility function
  // useEffect(() => {
  //   const loadusers = async () => {
  //     try {
  //       const data = await fetchAllInventory();
  //       setUsers(data);
  //       console.log(reports)
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadUser();
  // }, []);
  console.log(users)


  return (
    <div className="container mx-auto p-4">
      {loading && <p>Fetching Inventory data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 font-normal text-left">
              <th className="py-2 font-normal text-left text-[12px] px-4 border-b">Name</th>{/* { 2 } */}
              <th className="py-2 font-normal text-left text-[12px] px-4 border-b">Email Address</th>{/* { 3 } */}
              <th className="py-2 font-normal text-left text-[12px] px-4 border-b">Role</th>{/* { 4 } */}
              <th className="py-2 font-normal text-left text-[12px] px-4 border-b">Action</th>{/* { 5 } */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                  <td className="py-2 px-4 text-[12px] border-b">{user.name}</td>{/* { 2 } */}
                  <td className="py-2 px-4 text-[12px] border-b">{user.materialCategory}</td>{/* { 3 } */}
                  <td className="py-2 px-4 text-[12px] border-b">{user.totalQuantity}</td>{/* { 4 } */}
                  <td className="py-2 px-4 text-[12px] border-b">{user.unit}</td>{/* { 5 } */}
                  <td className="py-2 px-4 text-[12px] border-b">{user.siteLocation}</td>{/* { 7 } */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoryData;
