import { Link } from "react-router-dom";
import KnightLogo from "../assets/knightLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { useEffect, useState } from "react";

export default function Nav({ user }) {
  const [loading, setLoading] = useState(false);
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  function logout() {
    closeMenu();
    signOut(auth);
  }

  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
    }
  }, [user]);

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
          {loading ? (
            <button className="nav__dropdown_btn colour-grey"></button>
          ) : (
            <div className="nav__dropdown">
              <button className="nav__dropdown_btn">
                {user?.email?.charAt(0)?.toUpperCase()}
              </button>
              <div className="nav__dropdown_content">
                <Link to="/login" className="white" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          )}
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
          <li className="menu__link">
            <Link to="/login" className="white" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
