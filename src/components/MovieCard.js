import React from "react";
import { Link } from "react-router-dom";

export default function MoviCard({ film }) {
  
  
  return (
    <div className="MovieCard">
   <Link to={`/filmDescription/${film.id}`}><  img className="poster" src={film.img} alt="poster"/></Link>
      <h1 className="title"> {film.title} </h1>
     
      <h4> {film.Description} </h4>
    </div>
  );
}