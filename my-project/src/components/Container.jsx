import React from "react";
import img from "../assets/col-md-6.png";
import { NavLink } from "react-router-dom";
function Container() {
  return (
    <div>
      <div className="flex gap-8 items-center justify-center flex-wrap m-auto max-w-[1440px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col gap-5 w-[21%]">
          <h5 className="font-mont font-bold tracking-[0.1px] leading-6 text-mutedCcolor">
            SUMMER 2020
          </h5>
          <h2 className="font-mont font-bold tracking-[0.2px] leading-[50px] text-[40px] text-navBar">
            Part of the Neural Universe
          </h2>
          <h4 className="text-aTag text-xl leading-7 tracking-[0.2px] font-mont font-normal">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex gap-2">
            <NavLink to="/"></NavLink>
            <NavLink to="/"></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
