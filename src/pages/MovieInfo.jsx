import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieInfo({user}) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  async function fetchMovie() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=c636b946&i=${id}`
    );
    if (data.Response === "True") {
      setMovie(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
  });

  function toggleModal() {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <Nav user={user}/>
      {modal && (
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={toggleModal}></div>
          <button
            className="btn__close btn__menu--close fixed"
            onClick={toggleModal}
          >
            <FontAwesomeIcon icon="times" />
          </button>
          <div className="modal__window">
            <figure className="modal__img">
              <img src={movie.Poster} alt="" />
            </figure>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row">
            <div className="movie_info__wrapper">
              <div className="movie__information">
                <h1 className="movie__title"> {movie.Title} </h1>
                <h2 className="movie__year">{movie.Year}</h2>
                <br />

                <div className="ratings__wrapper">
                  {movie.Ratings.map((rating) => {
                    return (
                      <h3 className="movie__rating" key={rating.Source}>
                        {rating.Source}
                        {/*() => {
                          if (rating.Source === "Internet Movie Database") {
                            return "IMDB" ;
                          } else if (rating.Source === "Rotten Tomatoes") {
                            return "Rotten Tomatoes";
                          } else if (rating.Source === "Metacritic") {
                            return "Metacritic";
                          } else {
                            return "nothing"
                          }
                        }*/}
                        <br />
                        {rating.Value}
                      </h3>
                    );
                  })}
                </div>

                <h3 className="movie__actors">Cast: {movie.Actors}</h3>
                <h3 className="movie__writer">Writer/s: {movie.Writer}</h3>
                <br />
                <p className="movie__plot">{movie.Plot}</p>
              </div>
              <figure className="movie__poster" onClick={toggleModal}>
                <img src={movie.Poster} alt="" />
              </figure>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
