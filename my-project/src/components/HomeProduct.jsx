import React, { useState } from "react";

import ProductList from "./ProductList";

function HomeProduct() {
  return (
    <div className="max-w-[1920px] m-auto pb-20">
      <div className="max-w-[58%] m-auto flex flex-col items-center">
        <div className="text-center flex flex-col gap-[10px] py-20">
          <h4 className="text-xl font-mont font-normal tracking-[0.2px] text-aTag">
            Featured Products
          </h4>
          <h3 className="text-2xl font-mont text-categoryColor font-bold tracking-[1px]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-aTag font-mont tracking-[0.1px]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default HomeProduct;
