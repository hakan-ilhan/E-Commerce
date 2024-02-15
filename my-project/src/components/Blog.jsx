import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartArea, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const data = [
    {
      img: blog1,
      google: "Google",
      trending: "Trending",
      new: "New",
      h4: "Loudest à la Madison #1 (L'integral)",
      p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      learn: "Learn More",
    },
    {
      img: blog2,
      google: "Google",
      trending: "Trending",
      new: "New",
      h4: "Loudest à la Madison #1 (L'integral)",
      p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      learn: "Learn More",
    },
    {
      img: blog3,
      google: "Google",
      trending: "Trending",
      new: "New",
      h4: "Loudest à la Madison #1 (L'integral)",
      p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      learn: "Learn More",
    },
  ];

  return (
    <div className="flex justify-center py-28">
      <div className="max-w-[1080px] flex flex-col justify-center">
        <div className="flex flex-col gap-3  m-auto text-center pb-24">
          <h6 className="font-mont font-bold tracking-[0.2px] text-primaryColor">
            Practice Advice
          </h6>
          <h3 className="font-mont font-bold tracking-[0.2px] text-categoryColor text-4xl">
            Featured Posts
          </h3>
          <p className="text-aTag font-mont font-normal tracking-[0.2px] text-center">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex gap-2 w-full flex-wrap m-auto">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[348px] flex flex-col gap-4 shadow-inner pb-8"
              >
                <img
                  className="object-cover w-[348px] h-[300px]"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col gap-4 w-[85%] m-auto">
                  <div className="flex gap-2">
                    <p className="text-disabled font-mont text-xs tracking-[0.2px]">
                      {item.google}
                    </p>
                    <p className="text-aTag font-mont text-xs tracking-[0.2px]">
                      {item.trending}
                    </p>
                    <p className="text-aTag font-mont text-xs tracking-[0.2px]">
                      {item.new}
                    </p>
                  </div>
                  <h4 className="text-xl text-navBar leading-7 tracking-[0.2px] font-bold">
                    {item.h4}
                  </h4>
                  <p className="text-aTag text-sm leading-5 tracking-[0.2px] w-[94%]">
                    {item.p}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <FontAwesomeIcon
                        className="text-blue-500"
                        icon={faClock}
                      />
                      <p className="text-aTag text-xs tracking-[0.2px]">
                        {item.date}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <FontAwesomeIcon
                        className="text-dolar"
                        icon={faChartArea}
                      />
                      <p className="text-aTag text-xs tracking-[0.2px]">
                        {item.comments}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>{item.learn}</p>
                    <FontAwesomeIcon
                      className="text-blue-500"
                      icon={faChevronRight}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
