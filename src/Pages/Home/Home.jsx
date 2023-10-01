import {React, useState ,useEffect} from 'react';
import './Home.css';
import axios from 'axios';
import MoviesList from '../MoviesList/MoviesList';
import Loding from '../../Components/PreLoader/Loading'
export default function Home() {
 const apiKey = "api_key=2097277edea559f02e02ffba46dc0cec";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?with_genres=18&primary_release_year=2014&";
const apiUrl = url + path + apiKey;
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get(apiUrl).then((res)=>{
         if (res.data.results) {
        setMovies(res.data.results)
       }
    }).catch((error)=>{
        console.log(error);
    })
    })
    const addId = (pram)=>{
      const arr = [...pram]
      arr.unshift({text:Element , id:Math.random().toString()})
      return arr
    }
  return (
    <div className='container'>
             {
                movies.length < 0 ? <Loding/>:
                movies.map((e,index)=>(
                    <MoviesList key={index} items={e} addId={addId}/>
                ))
             }
    </div>
  )
}
