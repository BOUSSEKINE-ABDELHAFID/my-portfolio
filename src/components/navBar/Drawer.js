import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { MdMenu } from "react-icons/md";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <MdMenu className="menuButton" onClick={toggleDrawer("left", true)} />

        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <div className="drawer">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="link">
                  skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  contact us
                </Link>
              </li>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <li>
                <a href="https://twitter.com/boussekineabde3" className="lien">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BOUSSEKINE-ABDELHAFID"
                  className="lien"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/abdelhafid.boussekine"
                  className="lien"
                >
                  facebook
                </a>
              </li>
            </ul>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
