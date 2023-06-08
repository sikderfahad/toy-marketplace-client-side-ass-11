import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UserToyTable from "./UserToyTable";

const UserToy = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUsertoys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/userAllToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsertoys(data));
  }, [user]);

  //   console.log(userToys);

  const deleteToy = (id) => {
    fetch(`http://localhost:3000/allToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const headers = [
    "View",
    "Toy Name",
    "Sub-Category",
    "Price",
    "Available Quantity",
    "Rating",
    "Details",
    "Seller",
    "Contact",
    "Action",
  ];

  return (
    <div>
      <div className="w-10/12 mx-auto my-6">
        <h1>Your added Toys is: {userToys.length}</h1>
        <UserToyTable
          headers={headers}
          data={userToys}
          deleteToy={deleteToy}
        ></UserToyTable>
      </div>
    </div>
  );
};

export default UserToy;
