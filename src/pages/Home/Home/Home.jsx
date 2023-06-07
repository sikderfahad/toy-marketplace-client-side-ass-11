// import React from 'react';

import useTitle from "../../../Custom/UseTitle/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <h1 className="text-center text-green-500 text-4xl">This is Home page</h1>
    </div>
  );
};

export default Home;
