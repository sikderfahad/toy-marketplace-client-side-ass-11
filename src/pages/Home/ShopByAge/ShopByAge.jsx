import { Link } from "react-router-dom";

const ShopByAge = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center gap-6 my-20">
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-4xl mb-3">Shop by Age</h1>
        <Link className="text-[#4acdd5] text-lg">Our collections</Link>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-6 mt-6 gap-8">
        <div className="">
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img1.png?v=1676031096"
              alt=""
            />
            <h3 className="text-lg font-semibold">For Baby</h3>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img2.png?v=1676031123"
              alt=""
            />
            <h3 className="text-lg font-semibold w-fit mx-auto">
              1 to 2 Years
            </h3>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img3.png?v=1676029617"
              alt=""
            />
            <h3 className="text-lg font-semibold w-fit mx-auto">
              2 to 4 Years
            </h3>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img4.png?v=1676031270"
              alt=""
            />
            <h3 className="text-lg font-semibold w-fit mx-auto">
              5 to 7 Years
            </h3>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img5.png?v=1676031270"
              alt=""
            />
            <h3 className="text-lg font-semibold w-fit mx-auto">
              8 to 11 Years
            </h3>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center justify-center gap-4 hover:text-[#4acdd5] duration-200">
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img6.png?v=1676031270"
              alt=""
            />
            <h3 className="text-lg font-semibold w-fit mx-auto">
              12 Years & Up
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByAge;
