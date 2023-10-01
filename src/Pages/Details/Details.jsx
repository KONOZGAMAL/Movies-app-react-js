import React from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
export default function Details() {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  // const params = useParams()
  //  const movId = params.movieId;
  return (
    <div className='details'>
      <img src='' alt='logo'/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto dignissimos nisi inventore a, nulla praesentium obcaecati magnam nobis temporibus nam delectus, vitae ea? Sint enim ea autem quo a. </p>
    </div>
  )
}
