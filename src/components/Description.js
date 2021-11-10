import React from 'react'
import {useParams} from 'react-router-dom'
export default function Description({movieList}) {
    const {id}=useParams()
    const film=movieList.find(el=> el.id==id)
    return (
        <div>
            <h1>The Movie description of {film.title}</h1>
            <h2>{film.Description}</h2>
        </div>
    )
}
