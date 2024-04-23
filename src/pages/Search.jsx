import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultCard from "../components/ui/ResultCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";

export default function Search({user}) {
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [emptySearch, setEmptySearch] = useState(false);

  useEffect(() => {
    if (location.state) {
      fetchMovies(location.state.homeSearchInput);
    }
  }, [location.state]);

  async function fetchMovies(searchValue) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=c636b946&s=${searchValue}`
    );
    //console.log(data)
    if (data.Response === "True") {
      setSearch(data.Search);
      setEmptySearch(false);
    } else {
      setEmptySearch(true);
    }

    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(searchInput);
    if (searchInput) {
      fetchMovies(searchInput);
    }
  };

  function filterMovies(value) {
    if (value === "OLD_TO_NEW") {
      setSearch(search.slice().sort((a, b) => a.Year - b.Year));
    }
    if (value === "NEW_TO_OLD") {
      setSearch(search.slice().sort((b, a) => a.Year - b.Year));
    }
  }

  return (
    <>
      <Nav user={user}/>
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
                    className="header__input search__btn"
                    //onClick={(event) => console.log(event.target.value)}
                  >
                    {loading ? (
                      <FontAwesomeIcon icon="fa-solid fa-spinner" />
                    ) : (
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="filter">
        <div className="filter__wrapper">
          <select
            id="filter"
            defaultValue=""
            onChange={(event) => filterMovies(event.target.value)}
          >
            <option value="" disabled>
              {" "}
              Sort{" "}
            </option>
            <option value="OLD_TO_NEW">Year, Old to New</option>
            <option value="NEW_TO_OLD">Year, New to Old</option>
          </select>
        </div>
      </section>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__wrapper">
              {!emptySearch ? (
                search.map((movie) => {
                  if (movie.Poster !== "N/A") {
                    return <ResultCard key={movie.imdbID} movie={movie} />;
                  }
                  return null;
                })
              ) : (
                <div className="empty__search">
                  Invalid search input, try searching something else!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
