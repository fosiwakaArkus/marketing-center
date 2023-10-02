import React from "react";
import './Home.css';
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards";
import Menu from "../../components/menu/menu";
import Options from "../../components/options/options";

const HomePageComponent = () => {
  return (
    <div className="App">
      <Menu />
      <Options />
      <Cards />
      <Footer />
    </div>
  )
}

export default HomePageComponent