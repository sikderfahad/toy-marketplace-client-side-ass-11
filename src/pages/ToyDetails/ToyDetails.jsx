import React from "react";
import "./ToyDetails.css";

import { useLoaderData } from "react-router-dom";
import useTitle from "../../Custom/UseTitle/useTitle";

import { CSSTransition } from "react-transition-group";
import {
  FaMoneyBillAlt,
  FaStar,
  FaTag,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";

const ToyCard = () => {
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
      <div className="bg-gradient-to-br shadow-xl w-11/12 md:w-4/12 mx-auto from-gray-900 via-gray-900 to-[#30bff0]  rounded-md overflow-hidden">
        <img
          src={toy.Picture}
          alt={toy.Name}
          className="h-56 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-2xl mb-6 font-semibold  text-white">
            {toy.Name}
          </h3>
          <p className="text-gray-300 mb-2">
            <FaMoneyBillAlt className="inline mr-2" />
            Price: {toy.Price}
          </p>
          <p className="text-gray-300 mb-2">
            <FaStar className="inline mr-2" />
            Rating: {toy.Rating}
          </p>
          <p className="text-gray-300 mb-2">
            <FaTag className="inline mr-2" />
            Category: {toy.Category}
          </p>
          <p className="text-gray-300 mb-2">
            <FaClipboardList className="inline mr-2" />
            Availability: {"In stock"}
          </p>
          <p className="text-gray-300 mb-2">
            <FaCheckCircle className="inline mr-2" />
            Quantity: {toy.AvailableQuantity} <sub>pcs</sub>
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ToyCard;
