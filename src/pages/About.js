import React from "react";
import Image from "../images/me-removebg-preview.png"
import Footer from '../components/footer/Footer'
import NavBar from "../components/navBar/NavBar";

const About = () => {
  return (
    <div className = "about">
      <NavBar />
      <div className = "aboutContent">
        <h1>About ?</h1>
        <img src={Image} alt=""/>
        <p>
            My name is Abdelhafid BOUSSEKINE , i am an algerian of 20. I am actually a student at the higher national 
            school of computer science in Algiers and a future software engineer. I am  passionate with the latest technologies
            in general. I am a person that looks for a bright future and who whant to be apart of it. 
        </p>
      </div>
      

      <Footer/>

    </div>
  );
};

export default About;
