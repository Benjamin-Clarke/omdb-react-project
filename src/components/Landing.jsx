import React, { useState } from "react";
import LandingImage from "../assets/undraw_awards_img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    const [homeSearchInput, setHomeSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(homeSearchInput !== '') {
            navigate('/search', {state:{homeSearchInput:homeSearchInput}})
        }
      };

  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's top movie searching platform</h1>
          </div>
          <div className="header__input--wrapper">
            <form onSubmit={handleSubmit}>
              <input
                className="header__input"
                type="text"
                placeholder="Search Movies"
                onChange={(e) => setHomeSearchInput(e.target.value)}
              />
              <button
                id="submit-button"
                className="header__input search__btn"
                //onClick={(event) => console.log(event.target.value)}
                
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
          </div>
          <figure className="header__img--wrapper">
            <img src={LandingImage} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}
