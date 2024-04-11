import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../layout/ProductList";

function Test() {
  const param = useParams();
  const { gender, category } = param;
  const productData = useSelector(
    (store) => store.productReducer.filteredProducts
  );
  if (productData.length < 2) {
    return;
  }
  console.log("pro:", productData);
  return (
    <div>
      <ProductList data={productData.products} total={productData.total} />
    </div>
  );
}

export default Test;
