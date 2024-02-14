import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import ProductList from "./components/ProductList";
import HomeProduct from "./components/HomeProduct";
import Slider2 from "./components/Slider2";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoryCard />
      <HomeProduct />
      <Slider2 />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
