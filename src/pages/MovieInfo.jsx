import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
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
              <figure className="movie__poster">
                <img src={movie.Poster} alt="" />
              </figure>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
