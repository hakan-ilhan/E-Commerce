import React from "react";
import img from "../assets/none.png";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgIMG from "../assets/contactbg.jfif";

function Contact() {
  return (
    <div>
      <div className="max-w-[1400px] m-auto flex justify-between px-4 pb-12  items-center flex-wrap gap-24 ">
        <div className="flex flex-col gap-8 w-[400px] sm:w-[330px] sm:items-center sm:m-auto">
          <h5 className="text-categoryColor font-bold leading-6 tracking-[0.1px] sm:hidden">
            CONTACT US
          </h5>
          <h1 className="text-6xl text-categoryColor font-bold leading-[80px] tracking-[0.2px] ">
            Get in touch today!
          </h1>
          <h4 className="text-xl leading-7 tracking-[0.2px] text-aTag sm:w-64 sm:text-center">
            We know how large objects will act, but things on a small scale
          </h4>
          <div className="flex flex-col gap-4">
            <h3 className="text-categoryColor text-2xl leading-8 tracking-[0.1px] font-bold">
              Phone ; +451 215 215{" "}
            </h3>
            <h3 className="text-categoryColor text-2xl leading-8 tracking-[0.1px] font-bold">
              Fax : +451 215 215
            </h3>
          </div>
          <div className="flex gap-8">
            <FontAwesomeIcon
              className="text-3xl text-[#55ACEE]"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-3xl text-[#395185]"
              icon={faFacebook}
            />
            <FontAwesomeIcon className="text-3xl " icon={faInstagram} />
            <FontAwesomeIcon
              className="text-3xl text-[#0A66C2]"
              icon={faLinkedin}
            />
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="max-w-[607px] m-auto flex flex-col gap-16 text-center items-center py-24">
        <h2 className="text-5xl text-categoryColor font-bold leading-10 tracking-[0.2px]">
          Get answers to all your questions.
        </h2>
        <p className="text-aTag text-xl tracking-[0.2px] leading-7">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <NavLink
          to=""
          className="text-sm tracking-[0.2px] font-bold leading-5 bg-primaryColor  w-fit py-10 px-12 rounded-md text-white"
        >
          CONTACT OUR COMPANY
        </NavLink>
        <div className="flex gap-8">
          <FontAwesomeIcon
            className="text-3xl text-mutedCcolor"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="text-3xl text-mutedCcolor"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-3xl text-mutedCcolor"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-3xl text-mutedCcolor"
            icon={faLinkedin}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
