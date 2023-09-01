import "./Footer.css";
import footerLogo from "../../assets/img/logo.png";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

import map from "../../assets/img/map.png";
import mail from "../../assets/img/arroba.png";
import call from "../../assets/img/phone-call.png";

const Footer = () => {
  const qk_link = [
    "Help Center",
    "Redeem Voucher",
    "Contact Us",
    "Policies & Rules",
    "Check Offer List",
  ];

  const info = [
    "Product Support",
    "Checkout",
    "License Policy",
    "Affiliat",
    "About Us",
  ];

  const social_link = [
    {
      href: "https://www.facebook.com/",
      icon: <SlSocialFacebook />,
      text: "Facebook",
    },
    {
      href: "https://www.twitter.com/",
      icon: <SlSocialTwitter />,
      text: "Twitter",
    },
    {
      href: "https://www.instagram.com/",
      icon: <SlSocialInstagram />,
      text: "Instagram",
    },
    {
      href: "https://www.youtube.com/",
      icon: <SlSocialYoutube />,
      text: "Youtube",
    },
    {
      href: "https://www.pinterest.com/",
      icon: <SlSocialPintarest />,
      text: "Pintarest",
    },
  ];
  return (
    <div className="">
      <div className="main-footer">
        <div className="md:w-10/12 w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2fr,1fr,1fr,1fr] gap-8">
            <div className="">
              <div className=" xl:flex  xl:flex-col items-center justify-between md:gap-0 gap-8">
                <div className="flgo">
                  <img src={footerLogo} alt="" />
                  <p className="my-8">
                    A kids toy shop is a store that specializes in selling toys
                    and games designed specifically for children.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-5">
                      <img src={map} alt="" />
                      <p className="">Ads: 1800 Abbot Kinney, UK</p>
                    </div>
                    <div className="flex gap-5">
                      <img src={mail} alt="" />
                      <span>Email: hello@example.com</span>
                    </div>
                    <div className="flex gap-5">
                      <img src={call} alt="" />
                      <span>Phone: (012) 345 6789</span>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="ftitle text-lg font-semibold">Quick Links </h2>
              <div>
                <ul className="flex flex-col gap-7 ">
                  {qk_link.map((link, idx) => (
                    <li key={idx}>
                      <a
                        className="hover:text-[#30beeb] duration-200 py-2"
                        href=""
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle text-lg font-semibold">Information </h2>
              <div>
                <ul className="flex flex-col gap-7 ">
                  {info.map((link, idx) => (
                    <li key={idx}>
                      <a
                        className="hover:text-[#30beeb] duration-200 py-2"
                        href=""
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle text-lg font-semibold">Follow Us On </h2>
              <div>
                <ul className="flex flex-col gap-7">
                  {social_link.map(({ href, icon, text }) => (
                    <li key={text}>
                      <a
                        className="hover:text-[#30beeb] hover:ml-4 flex gap-5 duration-200 items-center"
                        href={href}
                      >
                        {icon} {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4acdd5] text-center py-8 text-white">
        <p>Copyright Toyman | Built with Toyman by Team90Degree</p>
      </div>
    </div>
  );
};

export default Footer;
