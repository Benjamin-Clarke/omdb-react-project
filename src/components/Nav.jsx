import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import KnightLogo from "../assets/knightLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={KnightLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/search" className="nav__link">
              Search
            </Link>
          </li>
          <button className="nav__account">
            {email.charAt(0).toUpperCase()}
          </button>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </ul>
      </div>
      <div className="menu__backdrop">
        <button className="btn__close btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          <li className="menu__link">
            <Link to="/" className="white" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__link">
            <Link to="/search" className="white" onClick={closeMenu}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
