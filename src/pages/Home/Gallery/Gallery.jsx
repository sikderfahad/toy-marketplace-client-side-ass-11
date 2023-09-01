import { Link } from "react-router-dom";
// import "./Gallery.css";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const img1 =
  "https://i.ibb.co/tmG4KVn/radpanzer-model-military-vehicle-163546.jpg";
const img2 =
  "https://i.ibb.co/C6Dy1zb/messerschmitt-kr200-classic-car-oldtimer-automobile-50697.jpg";
const img3 = "https://i.ibb.co/dWn4Bt7/pexels-photo-5997674.jpg";
const img4 = "https://i.ibb.co/J3V5x6N/pexels-photo-15748027.webp";
const img5 = "https://i.ibb.co/5jwS7fj/pexels-photo-97353.webp";
const img6 = "https://i.ibb.co/QkBqNN7/pexels-photo-10216077.webp";
const img7 = "https://i.ibb.co/YPVqXBv/pexels-photo-4114492.webp";
const img8 = "https://i.ibb.co/Sd7WgDG/pexels-photo-5471952.jpg";
const img9 = "https://i.ibb.co/QKHmLkQ/pexels-photo-5989806.jpg";
const img10 = "https://i.ibb.co/9b0ZvbJ/pexels-photo-7631694.jpg";
const img11 = "https://i.ibb.co/yPTNkWy/pexels-photo-7127058.jpg";
const img12 = "https://i.ibb.co/ZGFTWzv/pexels-photo-12705830.jpg";

const Gallery = () => {
  const imgBox = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-10/12 mx-auto mt-24 mb-10 flex flex-col gap-6"
    >
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-4xl mb-3">Our Exclusive Gallery</h1>
        <Link className="text-[#4acdd5] text-lg">Be entertained</Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {imgBox.map((item, idx) => (
          <div className="gl-img-box rounded-lg md:h-[300px] h-auto " key={idx}>
            <img
              className="rounded-lg backdrop-blur-sm hover:scale-95 hover:rotate-12 duration-300 gallery-ite w-full h-full shadow-lg"
              src={item}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
