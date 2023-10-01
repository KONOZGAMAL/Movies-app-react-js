import React from 'react';
import {Link, Outlet} from "react-router-dom";
import '../Home/Home.css';
// import Details from '../Details/Details';
export default function MoviesList(props) {
    const { title, poster_path, vote_average } = props.items;
    const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movies">
        <Link to='/movie/:movieId'>
            <img src={imgUrl + poster_path} alt=''/>
            <h4>{title}</h4>
            <p>{vote_average}</p>
        </Link>
        <Outlet/>
    </div>
  )
}