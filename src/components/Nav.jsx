import React from "react";
import { Link } from "react-router-dom";
import KnightLogo from "../assets/knightLogo.png";

export default function Nav() {
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
        </ul>
      </div>
    </nav>
  );
}
