import { Link } from "react-router-dom";
import SecTitle from "../../../shared/SecTitle/SecTitle";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const imgBox = [
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img1.png?v=1676031096",
    cat: "For Baby",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img2.png?v=1676031123",
    cat: "1 to 2 Years",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img3.png?v=1676029617",
    cat: "2 to 4 Years",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img4.png?v=1676031270",
    cat: "5 to 7 Years",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img5.png?v=1676031270",
    cat: "8 to 11 Years",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1152/4590/files/category_img6.png?v=1676031270",
    cat: "12 Years & Up",
  },
];

const ShopByAge = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center gap-6 my-20">
      <SecTitle title={"Shop by Age"} subTitle={"Our collections"}></SecTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 gap-8">
        {imgBox.map(({ img, cat }) => (
          <div key={img} data-aos="zoom-in" className="">
            <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
              <img src={img} alt="" />
              <h3 className="text-lg font-semibold">{cat}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByAge;
