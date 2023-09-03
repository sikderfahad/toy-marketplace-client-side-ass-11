import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();
const Poster = () => {
  return (
    <div className="my-12 w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row gap-6">
      <div
        data-aos="zoom-in-right"
        className="w-full md:w-1/2 h-fit overflow-hidden relative"
      >
        <img
          className="hover:scale-110 duration-500 w-full"
          src="https://i.ibb.co/zmgzjmf/poster1.webp"
          alt=""
        />
        <div className="text-white absolute top-[50%] translate-y-[-50%] right-5 lg:right-[70px]">
          <h3 className="font-semibold ">Sale on exclusive</h3>
          <h2 className="text-xl md:text-2xl my-0 lg:my-4 font-semibold md:leading-[35px] ">
            Accessories <br /> kids toy
          </h2>
          <button className="py-2 md:py-3 px-6 text-white bg-[#4acdd5] text-lg font-medium rounded-[50px] border-none outline-none u">
            shop now
          </button>
        </div>
      </div>

      <div
        data-aos="zoom-in-left"
        className="w-full md:w-1/2 h-fit overflow-hidden relative"
      >
        <img
          className="hover:scale-110 duration-500 w-full"
          src="https://i.ibb.co/GJBCt2s/poster2.webp"
          alt=""
        />
        <div className=" text-white absolute top-[50%] translate-y-[-50%] left-5 lg:left-[70px]">
          <h3 className="font-semibold ">Exclusive product</h3>
          <h2 className="text-xl md:text-2xl my-0 lg:my-4 font-semibold md:leading-[35px] ">
            Children <br /> Rubber toys
          </h2>
          <button className="py-2 md:py-3 px-6 text-white bg-[#ff6799] text-lg font-medium rounded-[50px] border-none outline-none u">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
// https://i.ibb.co/zmgzjmf/poster1.webp
// https://i.ibb.co/GJBCt2s/poster2.webp
