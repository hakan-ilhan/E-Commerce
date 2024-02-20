import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurTeam({ item, index }) {
  return (
    <div key={index} className="flex flex-col gap-4 m-auto">
      <img className="w-[316px] h-[231px]" src={item} alt="" />
      <div className="m-auto flex flex-col gap-2 text-center">
        <h5 className="leading-6 font-bold tracking-[0.1px] text-categoryColor">
          Username
        </h5>
        <h6 className="text-aTag text-sm font-bold tracking-[0.2px] leading-6">
          Profession
        </h6>
        <div className="flex gap-4">
          <FontAwesomeIcon
            className="text-primaryColor text-xl"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-primaryColor text-xl"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-primaryColor text-xl"
            icon={faTwitter}
          />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
