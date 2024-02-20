import React from "react";

function ProductList({ data }) {
  return (
    <div className="">
      <div className="flex gap-8 flex-wrap gap-y-20">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 text-center justify-center m-auto"
            >
              <img
                src={data.images}
                alt=""
                className="w-[239px] object-cover"
              />
              <h5 className="font-mont font-bold tracking-[0.1px]">
                {data.h5}
              </h5>
              <a
                href=""
                className="text-aTag font-mont font-bold tracking-[0.2px]"
              >
                {data.a}
              </a>
              <div className="flex gap-2 m-auto">
                <h5 className="text-mutedCcolor font-mont font-bold tracking-[0.1px]">
                  {data.price}
                </h5>
                <h5 className="font-mont font-bold tracking-[0.1px] text-dolar">
                  {data.price1}
                </h5>
              </div>
              <div className="flex gap-2  m-auto">
                <div className="w-[16px] h-[16px] rounded-full bg-primaryColor"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-dolar"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-alertColor"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-navBar"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
