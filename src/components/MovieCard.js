import React from "react";

export default function MoviCard({ film }) {
  
  
  return (
    <div className="MovieCard">
      <img className="poster" src={film.img} alt="poster" />
      <h1 className="title"> {film.title} </h1>
     
      <h4> {film.Description} </h4>
    </div>
  );
}