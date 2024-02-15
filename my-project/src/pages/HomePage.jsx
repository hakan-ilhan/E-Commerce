import React from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import HomeProduct from "../components/HomeProduct";
import Slider2 from "../components/Slider2";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Container from "../components/Container";

function HomePage() {
  return (
    <div>
      <Header />
      <CategoryCard />
      <HomeProduct />
      <Slider2 />
      <Container />
      <Blog />
      <Footer />
    </div>
  );
}

export default HomePage;
