import { Button } from "@material-ui/core";
import ToysTable from "./ToysTable";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Custom/UseTitle/useTitle";

const AllToys = () => {
  useTitle("All Toys");

  const allToys = useLoaderData();
  console.log(allToys);

  const headers = [
    "View",
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
        <div className="w-fit relative right-0 top-0 my-4">
          <Button variant="contained" color="#01ec89">
            View All Toys
          </Button>
        </div>
        <ToysTable headers={headers} data={allToys}></ToysTable>
      </div>
    </div>
  );
};

export default AllToys;
