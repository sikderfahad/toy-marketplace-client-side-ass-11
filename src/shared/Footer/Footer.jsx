import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/img/logo-light.png";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { BsFillSendCheckFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="">
      <div className="main-footer">
        <div className="md:w-10/12 w-11/12 mx-auto">
          <div className="">
            <div className="f-top flex md:flex-row flex-col items-center justify-between md:gap-0 gap-8">
              <div className="flgo">
                <img src={footerLogo} alt="" />
              </div>
              <div className="social flex gap-1">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div>
              <h2 className="ftitle">Contact Us</h2>
              <div>
                <ul className="contact-sec">
                  <li className="">
                    <div className="tit">Call :</div>
                    <div className="dots"></div>
                    <span> 914-309-7030 , 914-309-7030</span>
                  </li>
                  <li className="">
                    <div className="tit">Write : </div>
                    <div className="dots"></div>
                    <span> reservations@Yumy.com</span>
                  </li>
                  <li className="">
                    <div className="tit">Find us : </div>
                    <div className="dots"></div>
                    <span>71 Madison Ave 10013 New York</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle">Opening time</h2>
              <div>
                <ul className="contact-sec">
                  <li className="">
                    <div className="tit">Friday to Sunday </div>
                    <div className="dots"></div>
                    <span> 09:00 - 22:00</span>
                  </li>
                  <li className="">
                    <div className="tit">Tuesday to thursday </div>
                    <div className="dots"></div>
                    <span> 11:00 - 19:00</span>
                  </li>
                  <li className="">
                    <div className="tit">Monday </div>
                    <div className="dots"></div>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="ftitle">subscribe</h2>
              <div>
                <p className="text-[#777] mb-3">
                  Want to be notified when we launch a new template or an
                  udpate. Just sign up and we'll send you a notification by
                  email.
                </p>
                <form className="flex" action="">
                  <div className="f-input-fld">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="f-submit-btn">
                    <button className="text-2xl">
                      <BsFillSendCheckFill />{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#161718] text-center py-8 text-white">
        <p>
          <small>
            <i>© 2023, Yumy Template. Made with passion by UI-Expert.</i>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
