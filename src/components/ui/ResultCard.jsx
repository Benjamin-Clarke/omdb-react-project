import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ResultCard({ movie }) {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.Poster;
    image.onload = () => {
      if (!mountedRef.current) {
        setImg(image);
      }
    };
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <div className="movie__card">
      {img ? (
        <Link to={`/search/${movie.imdbID}`}>
          <img className="card__img" src={movie.Poster} alt="" />
          <div className="card__info">
            <h2 className="movie__title">{movie.Title}</h2>
            <h3 className="movie__year">{movie.Year}</h3>
          </div>
        </Link>
      ) : (
        <>
          <div className="movie__img--skeleton"></div>
          <div className="skeleton movie__title--skeleton"></div>
          <div className="skeleton movie__year--skeleton"></div>
        </>
      )}
    </div>
  );
}
