import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import img from "../assets/teamp.png";
import img1 from "../assets/eco.jfif";
import img2 from "../assets/teamp2.png";
import img3 from "../assets/teamp3.png";
import img4 from "../assets/teamp4.png";
import team from "../assets/1.jpg";
import team1 from "../assets/2.jpg";
import team2 from "../assets/3.jpg";
import team3 from "../assets/4.jpg";
import team4 from "../assets/5.jpg";
import team5 from "../assets/team-1-user-1.jpg";
import team6 from "../assets/team-1-user-2.jpg";
import team7 from "../assets/team-1-user-2-2.jpg";
import team8 from "../assets/team-1-user-3-1.jpg";

import OurTeam from "../layout/OurTeam";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const images = [team, team1, team2, team3, team4, team5, team6, team7, team8];
function Team() {
  return (
    <div>
      <div className="max-w-[1100px] m-auto flex flex-col gap-7 items-center py-24 md:w-[350px] md:text-center">
        <h5 className="text-aTag  leading-6 font-bold tracking-[0.1px] text-center">
          WHAT WE DO
        </h5>
        <h2 className="text-categoryColor text-6xl leading-[80px] font-bold tracking-[0.2px]">
          Innovation tailored for you
        </h2>
        <div className="flex gap-3 items-center">
          <NavLink
            to="/"
            className="text-categoryColor text-sm  leading-6 font-bold tracking-[0.1px] "
          >
            Home
          </NavLink>
          <FontAwesomeIcon className="text-mutedCcolor" icon={faChevronRight} />
          <p className="text-mutedCcolor text-sm  leading-6 font-bold tracking-[0.2px]">
            Team
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] flex gap-3 m-auto md:flex-wrap md:w-[400px] ">
        <div>
          <img className="object-cover" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-3 md:w-full">
            <img
              className="lg:w-[48%] object-cover w-[361px] h-[260px]"
              src={img1}
              alt=""
            />
            <img
              className="lg:w-[48%] object-cover md:h-[260px]"
              src={img2}
              alt=""
            />
          </div>
          <div className="flex gap-3 ">
            <img
              className="lg:w-[48%] object-cover md:h-[260px]"
              src={img3}
              alt=""
            />
            <img
              className="lg:w-[48%] object-cover md:h-[260px]"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1020px] m-auto pt-36">
        <h2 className="text-center font-bold text-5xl leading-10 tracking-[0.2px] text-categoryColor">
          Meet Our Team
        </h2>
      </div>
      <div className="max-w-[1020px] flex flex-wrap gap-8 m-auto gap-y-48 py-24 md:gap-y-16">
        {images.map((item, index) => {
          return <OurTeam key={index} item={item} index={index} />;
        })}
      </div>
      <div className="max-w-[800px] m-auto flex flex-col gap-8 items-center py-24 md:w-[80%] md:text-center">
        <h2 className="font-bold text-4xl leading-10 tracking-[0.2px] text-categoryColor">
          Start your 14 days free trial
        </h2>
        <h6 className=" text-sm leading-5 tracking-[0.2px] text-aTag text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor{" "}
          <br className="md:hidden" /> do met sent. RELIT official consequent.
        </h6>
        <NavLink
          to=""
          className="text-center text-white bg-primaryColor pt-3  rounded-md w-[186px] h-[52px]"
        >
          Try it free now
        </NavLink>
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
    </div>
  );
}

export default Team;
