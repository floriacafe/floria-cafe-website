import "./navbar.css";
import coffeelogo from "../assets/cafe-coffee-cup-2-svgrepo-com.svg";
import Homelogo from "../assets/home-1-svgrepo-com.svg";
import Menulogo from "../assets/menu.svg";
import Envelope from "../assets/envelope.svg";
import openenvelope from "../assets/open-envelope.svg";
import Location from "../assets/location.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 9999,
          pointerEvents: "auto",
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
      >
        <div className="left-head">
          <NavLink to="/" className="brand" aria-label="Floria Café Home">
            <img src={coffeelogo} alt="Coffee" className="coffeelogo" />
            <h2>Floria Café</h2>
          </NavLink>
        </div>

        <div className="right-head">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `right-container${isActive ? " active" : ""}`
            }
            aria-label="Home section"
          >
            <img src={Homelogo} alt="Home" className="logo" />
            <h2>Home</h2>
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `right-container${isActive ? " active" : ""}`
            }
            aria-label="Menu section"
          >
            <img src={Menulogo} alt="Menu" className="logo" />
            <h2>Menu</h2>
          </NavLink>

          <NavLink
            to="/location"
            className={({ isActive }) =>
              `right-container${isActive ? " active" : ""}`
            }
            aria-label="Location section"
          >
            <img src={Location} alt="Location" className="logo" />
            <h2>Location</h2>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `right-container${isActive ? " active" : ""}`
            }
            aria-label="Contact section"
            onMouseEnter={() => setIsopen(true)}
            onMouseLeave={() => setIsopen(false)}
            onTouchStart={() => setIsopen(true)}
            onTouchEnd={() => setIsopen(false)}
          >
            <img
              src={isopen ? openenvelope : Envelope}
              alt="Contact"
              className="logo"
            />
            <h2>Contact</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
