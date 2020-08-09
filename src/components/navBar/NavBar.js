import React, { Component } from "react";
import "./NavBar.css";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const s = window.scrollY;

      if (s > 100 && s < 500) {
        this.setState({
          scrolled: true,
        });
      } else {
        this.setState({
          scrolled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    return null;
  }

  render() {
    return (
      <nav className="navBar">
        <div className="navDrawerBtn">
          <Drawer className="navDrawer" />
        </div>
        <div className="navElements">
          <div className="routeLinks">
            <ul>
              <li>
                <NavLink
                  to="/about"
                  className="link"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className="link"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="centralLogo">
            <Link to="/" className="link logo">
              Boussekine
            </Link>
          </div>

          <div className="routeLinks">
            <ul>
              <li>
                <a href="https://twitter.com/boussekineabde3">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/BOUSSEKINE-ABDELHAFID">github</a>
              </li>
              <li>
                <a href="https://web.facebook.com/abdelhafid.boussekine">
                  facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
