import React from "react";
import { Link } from "react-router-dom";

export default function ResultCard({ title, year, poster, id }) {
  return (
    
      <div className="movie__card">
        <Link to={`/search/${id}`}>
        <img className="card__img" src={poster} alt="" />
        <h2 className="movie__title">{title}</h2>
        <h3 className="movie__year">{year}</h3>
        </Link>
      </div>
    
  );
}
