import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import md5 from "md5";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/userAction";

function Navbar() {
  const userName = useSelector((store) => store.userReducer.name);
  const userEmail = useSelector((store) => store.userReducer.email);
  const dispatch = useDispatch();
  const emailHash = md5(userEmail.trim().toLowerCase());

  // Gravatar URL'sini oluştur
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };
  return (
    <div>
      <div className="bg-navBar w-full md:hidden">
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
        <div className="max-w-[1440px] h-16 flex justify-between px-9 items-center m-auto pt-6 pb-6  md:flex-wrap md:pb-[500px] md:gap-y-12">
          <div className="flex gap-16 items-center md:order-1">
            <h3 className="font-mont text-3xl">Bandage</h3>
          </div>
          <div className="flex gap-8 text-aTag text-lg md:order-3 md:flex-col md:m-auto md:w-full md:items-center">
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
            <NavLink className="hover:text-black font-bold" to="/team">
              Pages
            </NavLink>
          </div>
          <div className="flex gap-14 text-primaryColor md:order-2">
            {userName === "" ? (
              <div className="flex gap-3 items-center md:hidden">
                <FontAwesomeIcon icon={faUser} />
                <NavLink to="/login">Login</NavLink>
                <p>/</p>
                <NavLink to="/signup"> Register</NavLink>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <img
                  src={gravatarUrl}
                  alt=""
                  className="w-[30px] h-[30px] rounded-md"
                />
                <p className="text-normal">{userName}</p>
                <p>/</p>
                <button onClick={logout}>Logout</button>
              </div>
            )}
            <div className="flex gap-10 items-center md:text-2xl md:text-aTag md:gap-7">
              <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
              <a className="md:hidden" href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a className="md:inline-block hidden" href="">
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
