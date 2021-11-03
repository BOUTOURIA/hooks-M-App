import React from 'react'



export default function Filter({setSearch}) {
    return (
        <div className="search">
            <i class="fas fa-search">
            <input
       placeholder="search a movie "
       id="search"
       onChange={ (e)=> setSearch(e.target.value) } />
            </i>

            
        </div>
    )
}

