import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultCard from "../components/ui/ResultCard";


export default function Search() {
    const [search, setSearch] = useState([]);

      async function fetchMovies() {
        const { data } = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&apikey=c636b946&s=fast`
        );
        setSearch(data.Search);
        if(search.length > 0 ) {
            console.log(search)
        }
      }

      useEffect(() => {
        fetchMovies();
      }) 

  return (
    <>
      <section id="search">
        <div className="row">
          <div className="container">
            <div className="header__wrapper">
              <h1 className="header__title">Browse Movies and Shows</h1>
              <div className="header__input--wrapper">
                <form action="">
                  <input
                    className="header__input"
                    type="text"
                    placeholder="Search"
                    id="search__movie"
                  />
                  <button
                    id="submit-button"
                    className="header__input"
                    //onClick={(event) => test(event.target.value)}
                    onClick={() => console.log("worked")}
                  >
                    {/*<i className="fa-solid fa-magnifying-glass"></i>*/}
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__wrapper">
                {
                    search.map((movie) => (
                        <ResultCard key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
                    ))
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
