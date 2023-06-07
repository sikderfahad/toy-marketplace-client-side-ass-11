// import React from 'react';
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
    <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-10 ">
      {imgBox.map((item, idx) => (
        <div className="rounded-lg h-[300px] " key={idx}>
          <img
            className="rounded-lg gallery-ite w-full h-full shadow-lg"
            src={item}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
