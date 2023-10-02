import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function Details() {
  const params = useParams();
  const movId = params.movieId;
  console.log(movId);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

    const [movies,setMovies]=useState()
     useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movId}?api_key=2097277edea559f02e02ffba46dc0cec`)
        .then((res)=>{
         if (res.status === 200 ){
         setMovies(res.data)
         console.log(res);
      }
     }).catch((error)=>{
         console.log(error);})},[movId])   
  return (
    <div className="details">
      <div className="details2">
        <div>
        <img src={imgUrl+movies?.poster_path} alt="logo"/>
        </div>
        <p>
         {movies?.overview}
        </p>
      </div>
      <div className="btn2">
        <button>Watch it</button>
        <Link to="/"> go to Home</Link>
      </div>
    </div>
  );
}
