import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UserToyTable from "./UserToyTable";
import Swal from "sweetalert2";

const btn_Success =
  "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center";

const btn_Danger =
  "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2";

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: btn_Success,
        cancelButton: btn_Danger,
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/allToys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              swalWithBootstrapButtons.fire(
                "Toy Deleted!",
                "Your toy has been deleted.",
                "success"
              );
              const restToy = userToys.filter((toy) => toy._id !== id);
              setUsertoys(restToy);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your Toy data is safe 🫠",
            "error"
          );
        }
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
        <h1 className="text-2xl text-[#2fbff0] font-semibold my-6">
          Your added → {userToys.length} {userToys.length > 1 ? "Toys" : "Toy"}
        </h1>
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
