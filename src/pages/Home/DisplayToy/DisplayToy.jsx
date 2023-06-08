// import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ToyList = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toyes")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  const categories = [...new Set(toysData.map((toy) => toy.Category))];

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <Tabs>
        <TabList className="flex mb-10">
          {categories.map((category, index) => (
            <Tab
              key={category}
              className={`${index === 0 ? " rounded-t-lg " : ""} ${
                index === categories.length - 1
                  ? "rounded-b-lg"
                  : "border-t-0  border-l-0 border-r-0"
              } ${
                index === 0 ? "ml-0 text-blue-500" : "ml-1 text-blue-500"
              } px-4 py-2 text-sm font-medium  bg-gray-100 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white`}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {toysData
                .filter((toy) => toy.Category === category)
                .map((toy) => (
                  <div
                    key={toy.Name}
                    className="bg-white shadow-lg rounded-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <img
                      src={toy.Picture}
                      alt={toy.Name}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{toy.Name}</h3>
                      <p className="text-gray-600 mb-2">Price: {toy.Price}</p>
                      <p className="text-gray-600 mb-2">Rating: {toy.Rating}</p>
                      <Link to={`/toy-details/${toy._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ToyList;
