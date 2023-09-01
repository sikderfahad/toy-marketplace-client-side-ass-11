import useTitle from "../../../Custom/UseTitle/useTitle";
import Banner from "../Banner/Banner";
import DisplayToy from "../DisplayToy/DisplayToy";
import Gallery from "../Gallery/Gallery";
import ShopByAge from "../ShopByAge/ShopByAge";
import "./Home.css";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  useTitle("Home");
  return (
    <div className="overflow-x-hidden scrollbar-hidden lg:overflow-x-auto">
      <Banner></Banner>
      <DisplayToy></DisplayToy>
      <ShopByAge></ShopByAge>
      <Gallery></Gallery>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
