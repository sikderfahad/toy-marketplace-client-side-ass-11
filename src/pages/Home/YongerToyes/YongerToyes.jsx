import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import SecTitle from "../../../shared/SecTitle/SecTitle";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const swiperImgBox = [
  { cat: "Featured", qnt: 99, img: "https://i.ibb.co/JKyYkbr/6.webp" },
  { cat: "Trends", qnt: 99, img: "https://i.ibb.co/34XJGQf/1.webp" },
  { cat: "Title", qnt: 99, img: "https://i.ibb.co/4R5JJ1V/2.webp" },
  { cat: "Best Sellers", qnt: 99, img: "https://i.ibb.co/zSpy1zT/3.webp" },
  { cat: "Trends", qnt: 99, img: "https://i.ibb.co/5LXdX67/4.jpg" },
  { cat: "New Arrival", qnt: 99, img: "https://i.ibb.co/HzYMWhb/5.webp" },
];
const YongerToyes = () => {
  return (
    <div>
      <div className="w-11/12 lg:w-10/12 mx-auto my-16">
        <SecTitle
          title={"We design toys not just for kids"}
          subTitle={"Explore More"}
        ></SecTitle>
        <Swiper
          spaceBetween={50}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds (3 seconds in this example)
            disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          effect="cube" // Set the effect to "cube"
          cubeEffect={{
            slideShadows: true, // Add shadows to the cube effect
            shadow: true, // Enable shadow
            shadowOffset: 20, // Shadow offset
            shadowScale: 0.94, // Shadow scale
          }}
          breakpoints={{
            // When window width is <= 640px (mobile)
            640: {
              slidesPerView: 1,
            },
            // When window width is <= 768px (tablet)
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px (large screen)
            1024: {
              slidesPerView: 3,
            },
            // When window width is >= 1280px (extra large screen)
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperImgBox.map(({ cat, qnt, img }) => (
            <SwiperSlide key={img}>
              <div data-aos="zoom-in-up" className="">
                <div className="thumb rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full rounded-lg hover:scale-125 duration-500"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="mt-3 flex justify-between items-center px-1">
                  <p className="text-xl font-medium">{cat}</p>
                  <p className="pr-count">{qnt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default YongerToyes;
