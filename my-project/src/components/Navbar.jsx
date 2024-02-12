import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <div>
      <div className="max-w-[1920px]  bg-navBar h-16  m-auto flex px-9 items-center justify-between text-white flex-wrap font-medium">
        <div className="flex gap-10">
          <div className=" flex gap-3 items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-4 ">
          <p>Follow Us :</p>
          <div className="flex gap-3    ">
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] h-16 flex justify-between px-9 items-center m-auto pt-6 pb-6">
        <div className="flex gap-16 items-center">
          <h3 className="font-mont text-3xl">BrandName</h3>
          <div className="flex gap-8 text-aTag text-lg">
            <a className="hover:text-black" href="">
              Home
            </a>
            <a className="hover:text-black" href="">
              Shop
            </a>
            <a className="hover:text-black" href="">
              About
            </a>
            <a className="hover:text-black" href="">
              Blog
            </a>
            <a className="hover:text-black" href="">
              Contact
            </a>
            <a className="hover:text-black" href="">
              Pages
            </a>
          </div>
        </div>
        <div className="flex gap-14 text-primaryColor">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faUser} />
            <button>Login</button>
            <p>/</p>
            <button> Register</button>
          </div>
          <div className="flex gap-10 items-center">
            <a href="">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
