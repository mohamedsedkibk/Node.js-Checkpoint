import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const MovieDetails = ({movieList}) => {
const params= useParams()
const movie= movieList.find((elm)=>elm.id==params.id)


  return (
    <div>
        <h1>{movie.title}</h1>
        <h1>{movie.description}</h1>
        <iframe 
            width="560" 
            height="315" 
            src={movie.trailer} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        >
        </iframe>
           


       

       <button>
        <Link to='/'>
        backhome
       </Link>
       </button>
    </div>
  )
}

export default MovieDetails