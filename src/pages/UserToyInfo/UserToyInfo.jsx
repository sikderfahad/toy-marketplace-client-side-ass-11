import React from "react";

import { useLoaderData } from "react-router-dom";
import useTitle from "../../Custom/UseTitle/useTitle";

import { CSSTransition } from "react-transition-group";
import {
  FaMoneyBillAlt,
  FaStar,
  FaTag,
  FaClipboardList,
  FaCheckCircle,
  FaUserCheck,
  FaMailBulk,
  FaBookReader,
} from "react-icons/fa";

const UserToyInfo = () => {
  const [isCardVisible, setIsCardVisible] = React.useState(false);

  useTitle("Toy details");
  const toy = useLoaderData();
  console.log(toy);

  React.useEffect(() => {
    setIsCardVisible(true);
  }, []);

  return (
    <CSSTransition
      in={isCardVisible}
      timeout={300}
      classNames="card"
      unmountOnExit
    >
      <div className="bg-gradient-to-br shadow-xl w-11/12 md:w-1/2 mx-auto from-gray-900 via-gray-900 to-[#30bff0]  rounded-md overflow-hidden">
        <img
          src={toy.photo}
          alt={toy.toyName}
          className="h-72 w-full object-cover"
        />
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border-r">
            <h3 className="text-2xl mb-6 font-semibold  text-white">
              {toy.toyName}
            </h3>
            <p className="text-gray-300 mb-2">
              <FaMoneyBillAlt className="inline mr-2" />
              Price: ${toy.price}
            </p>
            <p className="text-gray-300 mb-2">
              <FaStar className="inline mr-2" />
              Rating: {toy.rating}
            </p>
            <p className="text-gray-300 mb-2">
              <FaTag className="inline mr-2" />
              Category: {toy.category}
            </p>
            <p className="text-gray-300 mb-2">
              <FaClipboardList className="inline mr-2" />
              Availability: {"In stock"}
            </p>
            <p className="text-gray-300 mb-2">
              <FaCheckCircle className="inline mr-2" />
              Quantity: {toy.quantity} <sub>pcs</sub>
            </p>
            <p className="text-gray-300 mb-2">
              <FaUserCheck className="inline mr-2" />
              Seller: {toy.sellerName}
            </p>
            <p className="text-gray-300 mb-2">
              <FaMailBulk className="inline mr-2" />
              Contact us: {toy.email}
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-xl mb-6 font-semibold  text-white">
              <FaBookReader className="inline mr-2" />
              Toy Details →
            </h3>
            <p className="text-gray-300 mb-2">{toy.details}</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UserToyInfo;
