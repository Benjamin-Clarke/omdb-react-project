import React from "react";
import LandingImage from "../assets/undraw_awards_img.svg"

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's top movie searching platform</h1>
            <h2>FIND ALL YOUR FAVOURITE <span className="white">MOVIES</span> TODAY!</h2>
          </div>
          <div className="header__input--wrapper">
            <form action="">
              <input
                class="header__input"
                type="text"
                placeholder="Search Movies"
              />
              <input type="submit" value="Submit" className="header__input" />
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
