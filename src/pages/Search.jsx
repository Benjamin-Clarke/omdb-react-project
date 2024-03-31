import axios from "axios";
import React, { useState } from "react";
import ResultCard from "../components/ui/ResultCard";

export default function Search() {
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function fetchMovies(searchValue) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=c636b946&s=${searchValue}`
    );
    if (data.Response === "True") {
      setSearch(data.Search);
    }
    if (search.length > 0) {
      console.log(search);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
    if (searchInput) {
      fetchMovies(searchInput);
    }
  };

  return (
    <>
      <section id="search">
        <div className="row">
          <div className="container">
            <div className="header__wrapper">
              <h1 className="header__title">Browse Movies and Shows</h1>
              <div className="header__input--wrapper">
                <form onSubmit={handleSubmit}>
                  <input
                    className="header__input"
                    type="text"
                    placeholder="Search"
                    id="search__movie"
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <button
                    id="submit-button"
                    className="header__input"
                    //onClick={(event) => test(event.target.value)}
                    onClick={(event) => console.log(event.target.value)}
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
              {search.map((movie) => (
                <ResultCard
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
