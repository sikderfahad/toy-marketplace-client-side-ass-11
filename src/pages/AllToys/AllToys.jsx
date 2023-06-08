import ToysTable from "./ToysTable";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
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
