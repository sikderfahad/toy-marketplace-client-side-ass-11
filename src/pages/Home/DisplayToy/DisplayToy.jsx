import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastMsgWarn } from "../../../components/Toast/ToastMsg";

import AOS from "aos";
import "aos/dist/aos.css";
import SecTitle from "../../../shared/SecTitle/SecTitle";

// Initialize AOS
AOS.init();

const ToyList = () => {
  const { user } = useContext(AuthContext);
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("https://express-workspace.vercel.app/toyes")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  const categories = [...new Set(toysData.map((toy) => toy.Category))];

  const checkLogin = () => {
    !user && ToastMsgWarn("“You have to log in first to view details”");
  };

  return (
    <div
      data-aos="fade-up"
      className="w-11/12 md:w-10/12 my-24 mx-auto flex flex-col gap-6"
    >
      <SecTitle
        title={"We Love Trends"}
        subTitle={"Featured Products"}
      ></SecTitle>

      <div className=" my-10 ">
        <Tabs>
          <TabList className="flex md:flex-row flex-col md:gap-8 gap-4 md:w-fit w-full text-center mx-auto mb-10">
            {categories.map((category, index) => (
              <Tab
                key={category}
                className={`${
                  index === 0 ? " md:rounded-full " : "md:rounded-full"
                } ${
                  index === categories.length - 1
                    ? "md:rounded-full"
                    : "md:rounded-full"
                } ${
                  index === 0 ? "ml-0 text-blue-500" : "ml-1 text-blue-500"
                } py-4 px-8 text-lg font-medium  bg-gray-100 md:rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:bg-blue-500 md:focus:rounded-full focus:text-white`}
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="grid grid-cols-1 duration-500 sm:grid-cols-2 md:grid-cols-3  gap-8">
                {toysData
                  .filter((toy) => toy.Category === category)
                  .map((toy) => (
                    <div
                      key={toy.Name}
                      className="bg-[#f6f8fa] shadow rounded-lg overflow-hidden transform hover:scale-95 duration-300"
                    >
                      <img
                        src={toy.Picture}
                        alt={toy.Name}
                        className="h-[250px] w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {toy.Name}
                        </h3>
                        <p className="text-gray-600 mb-2">Price: {toy.Price}</p>
                        <p className="text-gray-600 mb-2">
                          Rating: {toy.Rating}
                        </p>
                        <Link to={`/toy-details/${toy._id}`}>
                          <button
                            onClick={checkLogin}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                          >
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
    </div>
  );
};

export default ToyList;
