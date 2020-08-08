import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import Image from "../images/undraw_personal_email_t7nw.svg"

const Contact = () => {
  return (
    <div className = "contact">
      <NavBar />
        <div className = "contactContent">
        <img src={Image} alt=""/>
            <form action="https://formspree.io/xnqgwybd" method="POST">
                <input type="text" name="name" placeholder = "name"/>
                <input type="email" name="_replyto" placeholder = "email"/>
                <textarea name="messag
                e" id="" cols="30" rows="10" placeholder = "message"></textarea>
                <button type = "submit" value = "Send">Send</button>
            </form>
            <div className = "callNumbers">
                <h1>Or Call me to these numbers : </h1>
                <h2>0541686147</h2>
                <h2>0796033031</h2>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Contact;
