import useTitle from "../../../Custom/UseTitle/useTitle";
import Banner from "../Banner/Banner";
import DisplayToy from "../DisplayToy/DisplayToy";
import Gallery from "../Gallery/Gallery";
import ShopByAge from "../ShopByAge/ShopByAge";
import "./Home.css";
import FAQ from "../FAQ/FAQ";
import YongerToyes from "../YongerToyes/YongerToyes";
import Poster from "../Poster/Poster";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <div className="overflow-x-hidden scrollbar-hidden lg:overflow-x-auto">
        <Banner></Banner>
        <YongerToyes></YongerToyes>
        <DisplayToy></DisplayToy>
        <ShopByAge></ShopByAge>
        <Gallery></Gallery>
        <hr className="w-11/12 lg:w-10/12 mx-auto my-12" />
        <Poster></Poster>
        <FAQ></FAQ>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
