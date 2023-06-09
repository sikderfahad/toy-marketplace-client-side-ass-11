// import React from 'react';

// Initialize AOS

const Banner = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-easing="ease"
      className="w-full overflow-hidden relative h-screen md:h-screen"
    >
      <img
        className="w-full h-full"
        src={"https://i.ibb.co/3RJCWKg/toyman-banner.webp"}
        alt=""
      />
      <div className="flex absolute top-0 right-0 md:bg-transparent bg-[#000000a8] h-full w-full mx-auto justify-between items-center">
        <div className=""></div>

        <div className="text-center md:text-left  gap-6 md:w-1/2 w-full md:bg-transparent  banner-content">
          <h3 className="animated">Big discount</h3>
          <h1 className="animated text-[40px] md:text-[80px]">KIDS OFFER</h1>
          <button className="banner-btn mt-0 md:mt-[50px]">SHOP NOW →</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
