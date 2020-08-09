import React from "react";
import NavBar from "../components/navBar/NavBar";
import "../App.css";
import Image from "../images/undraw_welcome_cats_thqn.svg";
import Image2 from "../images/BLACK_II_desktop-1.jpg";
import Image3 from "../images/PSX_20200630_181754.jpg";
import Footer from "../components/footer/Footer";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <header>
        <Jump>
          <h1>Welcome to my web site :)</h1>
        </Jump>

        <img src={Image} alt="" />
      </header>
      <div className="imagesContainer">
        <Fade bottom>
          <div className="image2Container">
            <img src={Image2} alt="" />
          </div>
        </Fade>

        <Fade bottom>
          <div className="image3Container">
            <img src={Image3} alt="" />
          </div>
        </Fade>
      </div>

      <div className="h1Container">
        <h1>
          We collaborate with creatives, to bring unique ideas into production
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
