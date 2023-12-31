import React from 'react';
import {Link, Outlet} from "react-router-dom";
import '../Home/Home.css';
export default function MoviesList(props) {
    const { title, poster_path, vote_average } = props.items;
    const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movies">
        <Link to={`/movie/${props.items.id}`}>
            <img src={imgUrl + poster_path} alt=''/>
            <h4 className='tex'>{title}</h4>
            <p>{vote_average}</p>
        </Link>
        <Outlet/>
    </div>
  )
}