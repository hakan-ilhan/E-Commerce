import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/aboutUsHero.png";
import media from "../assets/mediabg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/team-1-user-1.jpg";
import img2 from "../assets/team-1-user-2.jpg";
import img3 from "../assets/team-1-user-3.jpg";
import wom from "../assets/wom.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Brands from "../layout/Brands";
import OurTeam from "../layout/OurTeam";

const images = [img1, img2, img3];
function About() {
  return (
    <div>
      <div className="max-w-[1400px] m-auto flex justify-between px-4 py-12 items-center flex-wrap gap-24 ">
        <div className="flex flex-col gap-8 w-[400px] sm:w-[330px] sm:items-center sm:m-auto">
          <h5 className="text-categoryColor font-bold leading-6 tracking-[0.1px] sm:hidden">
            ABOUT COMPANY
          </h5>
          <h1 className="text-6xl text-categoryColor font-bold leading-[80px] tracking-[0.2px] ">
            ABOUT US
          </h1>
          <h4 className="text-xl leading-7 tracking-[0.2px] text-aTag sm:w-64 sm:text-center">
            We know how large objects will act, but things on a small scale
          </h4>
          <NavLink
            to="/"
            className="bg-primaryColor rounded-md text-sm tracking-[0.2px] leading-6 w-[193px] h-[52px] text-white text-center flex items-center justify-center"
          >
            Get Quote Now
          </NavLink>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="max-w-[1200px] flex justify-between py-8 m-auto items-center flex-wrap sm:justify-center sm:text-center sm:w-72 sm:gap-20">
        <div className="flex flex-col gap-8 w-[391px] ">
          <p className="text-sm leading-5 tracking-[0.2px] text-alertColor">
            Problems trying
          </p>
          <h2 className="text-2xl leading-8 tracking-[0.1px] text-categoryColor font-bold ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <p className="text-sm leading-5 tracking-[0.2px] text-aTag w-[545px] font-normal">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="max-w-[1150px] flex justify-between font-bold text-6xl leading-[80px] tracking-[0.2px] text-categoryColor m-auto py-24 sm:w-[35%] flex-wrap sm:text-center sm:gap-20">
        <div>
          <h1>15K</h1>
          <h5 className="leading-6 tracking-[0.1px] text-aTag text-base">
            Happy Customers
          </h5>
        </div>
        <div>
          <h1>150K</h1>
          <h5 className="leading-6 tracking-[0.1px] text-aTag text-base">
            Monthly Visitors
          </h5>
        </div>
        <div>
          <h1>15</h1>
          <h5 className="leading-6 tracking-[0.1px] text-aTag text-base">
            Countries Worldwide
          </h5>
        </div>
        <div>
          <h1>100+</h1>
          <h5 className="leading-6 tracking-[0.1px] text-aTag text-base">
            Top Partners
          </h5>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${media})` }}
        className="max-w-[989px] h-[540px] bg-no-repeat my-28  m-auto flex justify-center items-center rounded-2xl"
      >
        <FontAwesomeIcon
          className="text-8xl  rounded-full text-primaryColor bg-white"
          icon={faCirclePlay}
        />
      </div>
      <div className="max-w-[1100px] m-auto flex flex-col gap-24 py-24">
        <div className="text-center  m-auto flex flex-col gap-6">
          <h2 className="font-bold text-4xl leading-10 tracking-[0.2px] text-categoryColor">
            Meet Our Team
          </h2>
          <p className="text-aTag text-sm leading-5 tracking-[0.2px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-full flex gap-8 flex-wrap">
          {images.map((item, index) => {
            return <OurTeam key={index} item={item} index={index} />;
          })}
        </div>
      </div>
      <div className="bg-lightGrey py-24 ">
        <div className="max-w-[1400px] m-auto flex flex-col gap-12 sm:w-[80%] sm:m-auto">
          <div className="text-center  m-auto flex flex-col gap-6">
            <h2 className="font-bold text-4xl leading-10 tracking-[0.2px] text-categoryColor">
              Big Companies Are Here
            </h2>
            <p className="text-aTag text-sm leading-5 tracking-[0.2px]">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <Brands />
        </div>
      </div>
      <div className="max-w-[1920px] flex m-auto">
        <div className="bg-hoverColor flex justify-center items-center w-[1225px] text-white">
          <div className="flex flex-col gap-8 font-bold w-[500px]">
            <h5 className="leading-6 tracking-[0.1px]">WORK WITH US</h5>
            <h2 className="leading-10 tracking-[0.2px] text-4xl">
              Now Let’s grow Yours
            </h2>
            <p className="leading-5 tracking-[0.2px] text-sm font-normal">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <NavLink
              to="/"
              className="rounded-md text-white px-10 py-4  border-white border-[1px] text-center w-[130px] "
            >
              Button
            </NavLink>
          </div>
        </div>
        <div>
          <img className="object-cover w-[777px]" src={wom} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
