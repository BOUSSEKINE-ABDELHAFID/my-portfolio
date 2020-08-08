import React from 'react'
import NavBar from "../components/navBar/NavBar"
import "../App.css"
import { motion } from "framer-motion"
import Image from "../images/undraw_welcome_cats_thqn.svg"
import Image2 from "../images/BLACK_II_desktop-1.jpg"
import Image3 from "../images/PSX_20200630_181754.jpg"
import Footer from '../components/footer/Footer'

const animateTitle = {
  init : {
    opacity : 0,
    y : 200
  },
  anim : {
    opacity : 1,
    y : 0,
    transition : {
      delay : 0.3,
      type : "spring",
      stiffness : 80
    }
  }
}


const Home = () => {
    return (
        <div className = "Home">
          <NavBar/>
          <header>
            <motion.h1
            variants = {animateTitle}
            initial = "init"
            animate = "anim"
            >Welcome to my web site :)</motion.h1>
            <img src={Image} alt=""/>
          

          </header>
          <div className = "imagesContainer">
              <div className = "image2Container">
                <img src={Image2} alt=""/>
              </div>

              <div className = "image3Container">
                <img src={Image3} alt=""/>
              </div>

            </div>

            <div className = "h1Container">
              <h1>We collaborate with creatives, to bring unique ideas into production</h1>
            </div>
            <Footer/>

        </div>
    )
}

export default Home
