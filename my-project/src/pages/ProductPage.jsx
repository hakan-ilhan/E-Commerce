import React from "react";
import Product from "../components/Product";
import ProductDesc from "../components/ProductDesc";
import Best from "../components/Best";

function ProductPage() {
  return (
    <div>
      <Product />
      <ProductDesc />
      <Best />
    </div>
  );
}

export default ProductPage;
