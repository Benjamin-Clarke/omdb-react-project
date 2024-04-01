import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ResultCard({ movie, id }) {
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
        <Link to={`/search/${id}`}>
          <img className="card__img" src={movie.Poster} alt="" />
          <h2 className="movie__title">{movie.Title}</h2>
          <h3 className="movie__year">{movie.Year}</h3>
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
