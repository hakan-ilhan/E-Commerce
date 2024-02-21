import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-navBar w-full sm:hidden">
        <div className="max-w-[1440px]   h-16  m-auto flex px-9 items-center justify-between text-white flex-wrap font-medium">
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
      </div>
      <div className="bg-147 w-full">
        <div className="max-w-[1440px] h-16 flex justify-between px-9 items-center m-auto pt-6 pb-6  sm:flex-wrap sm:pb-[500px] sm:gap-y-12">
          <div className="flex gap-16 items-center sm:order-1">
            <h3 className="font-mont text-3xl">Bandage</h3>
          </div>
          <div className="flex gap-8 text-aTag text-lg sm:order-3 sm:flex-col sm:m-auto sm:w-full sm:items-center">
            <NavLink to="/" className="hover:text-black font-bold" href="">
              Home
            </NavLink>
            <NavLink to="/shop" className="hover:text-black font-bold" href="">
              Shop
            </NavLink>
            <NavLink to="/about" className="hover:text-black font-bold" href="">
              About
            </NavLink>
            <a className="hover:text-black font-bold" href="">
              Blog
            </a>
            <NavLink
              to="/contact"
              className="hover:text-black font-bold"
              href=""
            >
              Contact
            </NavLink>
            <a className="hover:text-black font-bold" href="">
              Pages
            </a>
          </div>
          <div className="flex gap-14 text-primaryColor sm:order-2">
            <div className="flex gap-3 items-center sm:hidden">
              <FontAwesomeIcon icon={faUser} />
              <button>Login</button>
              <p>/</p>
              <button> Register</button>
            </div>
            <div className="flex gap-10 items-center sm:text-2xl sm:text-aTag sm:gap-7">
              <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
              <a className="sm:hidden" href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a className="sm:inline-block hidden" href="">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
