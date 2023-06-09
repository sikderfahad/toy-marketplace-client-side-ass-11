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
  return (
    <div className="">
      <div className="main-footer">
        <div className="md:w-10/12 w-11/12 mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] grid-cols-1 gap-8">
            <div className="">
              <div className=" flex md:flex-row flex-col items-center justify-between md:gap-0 gap-8">
                <div className="flgo">
                  <img src={footerLogo} alt="" />
                  <p className="my-8">
                    A kids toy shop is a store that specializes in selling toys
                    and games designed specifically for children.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-5">
                      <img src={map} alt="" />
                      <span>Addresss: 1800 Abbot Kinney Nebraska UK</span>
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
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Redeem Voucher
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Policies & Rules
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Check Offer List
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle text-lg font-semibold">Information </h2>
              <div>
                <ul className="flex flex-col gap-7 ">
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Product Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      License Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      Affiliat
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] duration-200 py-2"
                      href=""
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle text-lg font-semibold">Follow Us On </h2>
              <div>
                <ul className="flex flex-col gap-7 ">
                  <li>
                    <a
                      className="hover:text-[#30beeb]  hover:ml-4 flex gap-5 duration-200 items-center"
                      href="https://www.facebook.com/"
                    >
                      <SlSocialFacebook />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                      href="https://www.twitter.com/"
                    >
                      <SlSocialTwitter />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                      href="https://www.instagram.com/"
                    >
                      <SlSocialInstagram />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                      href="https://www.youtube.com/"
                    >
                      <SlSocialYoutube />
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                      href="https://www.pinterest.com/"
                    >
                      <SlSocialPintarest />
                      Pintarest
                    </a>
                  </li>
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
