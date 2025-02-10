import React from "react";
import Header from "../components/header/Header";
import HeroCard from "../components/hero-card/HeroCard";
import Footer from "../components/footer/Footer";
import "../index.css";
import Courses from "../components/course/Courses";
import HeroFooter from "../components/hero-footer/HeroFooter";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroCard />
        <Courses />
        <HeroFooter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
