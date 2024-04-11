import React, { useEffect, useState } from "react";
import ShopCards from "./ShopCards";
import ProductList from "../layout/ProductList";
import { BrowserRouter, Route } from "react-router-dom";
import Brands from "../layout/Brands";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/actions/productAction";

import useQuery from "../layout/useQuery";

function Shop() {
  const { getQueryFromUrl } = useQuery();
  const dispatch = useDispatch();
  const currentUrl = window.location.href;
  console.log("URL:", currentUrl);
  useEffect(() => {
    if (currentUrl.includes("category")) {
      return;
    }
    if (!currentUrl.includes("product")) {
      dispatch(fetchProducts());
    }
    getQueryFromUrl();
  }, []);
  const productData = useSelector((store) => store.productReducer.productList);
  if (productData.length < 1) {
    return;
  }
  return (
    <div>
      <ShopCards />
      {/* <Route path="/shop/:gender/:category">
        <Test />
      </Route> */}
      {/* <Route exact path="/shop"> */}
      <ProductList data={productData.products} total={productData.total} />
      {/* </Route> */}
      <Brands />
    </div>
  );
}

export default Shop;
