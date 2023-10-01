import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './Loading.css';
export default function Loading(props) {
  return (
    <div className='preloader'>
     <ClimbingBoxLoader
        color={"#8d86b5"}
        loading={props.load}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
    </div>
  )
}
