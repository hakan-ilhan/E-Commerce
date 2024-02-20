import React from "react";
import CategoryCard from "../components/CategoryCard";
import HomeProduct from "../components/HomeProduct";
import Slider2 from "../components/Slider2";
import Blog from "../components/Blog";
import Container from "../components/Container";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <CategoryCard />
      <HomeProduct />
      <Slider2 />
      <Container />
      <Blog />
    </div>
  );
}

export default HomePage;
