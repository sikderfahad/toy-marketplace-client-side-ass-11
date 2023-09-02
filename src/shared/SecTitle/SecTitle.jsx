import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const SecTitle = ({ title, subTitle }) => {
  return (
    <div data-aos="zoom-out-down" className="text-center mb-6">
      <h1 className="text-3xl text-[#333333] font-bold md:text-5xl mb-3">
        {title}
      </h1>
      <Link className="text-[#4acdd5] text-lg">{subTitle}</Link>
    </div>
  );
};

export default SecTitle;
