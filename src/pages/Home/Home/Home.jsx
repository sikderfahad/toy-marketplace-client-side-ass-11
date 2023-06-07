// import React from 'react';

import useTitle from "../../../Custom/UseTitle/useTitle";
import Banner from "../Banner/Banner";
import DisplayToy from "../DisplayToy/DisplayToy";
import Gallery from "../Gallery/Gallery";
import "./Home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <DisplayToy></DisplayToy>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
