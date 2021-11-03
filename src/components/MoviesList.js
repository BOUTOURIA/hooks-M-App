import React from 'react'
import MovieCard from './MovieCard'
import Add from './Add'


export default function MoviesList({ movieList , search, addHandler}) {
    return (
        <div className="List">

    
      {movieList
      .filter(film=>  film.title.toLowerCase().includes(    search.toLowerCase().trim()   ) )
      .map((film,key) => (
        <MovieCard film={film}  key={film.id} />
      ))}


      <Add addHandler={addHandler}/>
    </div>
  );
}

