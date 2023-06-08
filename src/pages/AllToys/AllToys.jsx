// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToysTable from "./ToysTable";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/userAllToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [user]);

  console.log(allToys);

  const headers = [
    "Seller",
    "Toy Name",
    "Sub-Category",
    "Price",
    "Available Quantity",
    "Details",
  ];

  return (
    <div>
      <div className="w-10/12 mx-auto my-6">
        <ToysTable headers={headers} data={allToys}></ToysTable>
      </div>
    </div>
  );
};

export default AllToys;
