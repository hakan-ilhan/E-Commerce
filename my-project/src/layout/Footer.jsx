import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className=" text-aTag font-bold">
      <div className="max-w-[1920px] flex m-auto ">
        <div className="flex gap-28 m-auto w-[70%] flex-wrap py-24 sm:flex-col md:gap-8">
          <div className="flex flex-col gap-4 w-[230px] ">
            <h3 className="font-mont text-2xl font-bold text-black">
              Get In Touch
            </h3>
            <p className="font-mont font-normal sm:w-[175px]">
              the quick fox jumps over the lazy dog
            </p>
            <div className="flex gap-4 text-primaryColor">
              <a href="">
                <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
              </a>
              <a href="">
                <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-mont w-[230px]">
            <h3 className="font-mont text-2xl font-bold text-black">
              Company info
            </h3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">Carrier</NavLink>
            <NavLink to="/">We are hiring</NavLink>
            <NavLink to="/">Blog</NavLink>
          </div>
          <div className="flex flex-col gap-3 text-mont w-[230px]">
            <h3 className="font-mont text-2xl font-bold text-black">
              Features
            </h3>
            <NavLink to="/">Business Marketing</NavLink>
            <NavLink to="/">User Analytic</NavLink>
            <NavLink to="/">Live Chat</NavLink>
            <NavLink to="/">Unlimited Support</NavLink>
          </div>
          <div className="flex flex-col gap-3 text-mont w-[230px]">
            <h3 className="font-mont text-2xl font-bold text-black">
              Resources
            </h3>
            <NavLink to="/">IOS & Android</NavLink>
            <NavLink to="/">Watch a Demo</NavLink>
            <NavLink to="/">Customers</NavLink>
            <NavLink to="/">API</NavLink>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center max-w-[1920px] m-auto text-center py-8 bg-lightGrey">
        <h6 className=" font-mont text-aTag font-bold tracking-[0.2px]">
          Made With Love By Figmaland All Right Reserved{" "}
        </h6>
      </div>
    </div>
  );
}

export default Footer;
