import React from "react";

export default function ResultCard({title, year, poster}) {
  return (
    <div className="movie__card">
      <img
        className="card__img"
        src={poster}
        alt=""
      />
      <h2 className="movie__title">{title}</h2>
      <h3 className="movie__year">{year}</h3>
    </div>
  );
}
