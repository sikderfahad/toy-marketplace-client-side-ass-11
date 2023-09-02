import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Custom/UseTitle/useTitle";
import { LoadingTriangle } from "../../components/Spinner/Spinner";

const labelClass =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const inputClass =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  console.log(user);

  const handledAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const toyInfo = {
      sellerName,
      email,
      photo,
      toyName,
      category,
      details,
      quantity,
      rating,
      price,
    };

    const btn_Success =
      "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center";

    const btn_Danger =
      "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2";

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
        text: "Please check the creating toy info carefully!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, add toy!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            "https://express-workspace-fsikder484-gmailcom.vercel.app/addToy",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(toyInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              swalWithBootstrapButtons.fire(
                "Added!",
                "Your toy has been added.",
                "success"
              );
              console.log(data);
              form.reset();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Check the toy info and create it again",
            "error"
          );
        }
      });

    console.log(toyInfo);
  };

  // Loading Intregation
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this value as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingTriangle />
      ) : (
        <div className="w-11/12 lg:w-3/4 xl:w-1/2 mx-auto p-10 bg-gray-900 rounded-xl">
          <form onSubmit={handledAddToy}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                defaultValue={user?.displayName && user.displayName}
                type="text"
                name="sellerName"
                id="sellerName"
                readOnly
                className={inputClass}
                placeholder=" "
                required
              />
              <label htmlFor="sellerName" className={labelClass}>
                Seller Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                defaultValue={user?.email && user.email}
                type="email"
                name="email"
                id="email"
                readOnly
                className={inputClass}
                placeholder=" "
                required
              />
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="photo"
                id="photo"
                className={inputClass}
                placeholder=" "
                required
              />
              <label htmlFor="photo" className={labelClass}>
                Picture URL of the toy
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="toyName"
                  id="toyName"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="toyName" className={labelClass}>
                  Toy name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="category"
                  id="category"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="category" className={labelClass}>
                  Sub-category
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="details"
                  id="details"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="details" className={labelClass}>
                  Details description
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="quantity" className={labelClass}>
                  Available quantity
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="rating" className={labelClass}>
                  Rating
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={inputClass}
                  placeholder=" "
                  required
                />
                <label htmlFor="price" className={labelClass}>
                  Price
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white w-full md:w-1/2 mx-auto mt-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50  font-medium rounded-lg text-lg md:text-xl px-5 py-2.5 text-center"
              >
                Add New Toy
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddToy;
