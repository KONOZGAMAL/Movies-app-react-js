import { React, useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import MoviesList from "../MoviesList/MoviesList";
import Loding from "../../Components/PreLoader/Loading";
export default function Home() {
  const [page, setPage] = useState(1);
  const apiKey = "api_key=2097277edea559f02e02ffba46dc0cec";
  const url = "https://api.themoviedb.org/3";
  const path = "/discover/movie?with_genres=18&primary_release_year=2014&";
  const apiUrl = url + path + apiKey + "&page=" + page;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies([])
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.results) {
          setMovies(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <div >
      <div className="container">
      {movies.length > 0 ? (
        movies.map((e, index) => <MoviesList key={index} items={e} />)
        ) : (
          <Loding />
          )}
        </div>
       <div className="btn">
        <button onClick={() => setPage(page + 1)}>next</button>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prv
        </button>
      </div>
    </div>
  );
}
