import React from 'react'
import MovieCard from './MovieCard';
function MovieList({data}) {
  return (
    <div className="container-xxl     ">
       <div  className='row ' >
        {
            data.map((elm,i)=>(

            <div key={i}  className='col-4  pt-4    d-flex justify-content-center  align-items-center   '  >
            <MovieCard elm={elm}/>
            </div>
                
            ))

            
        }
        </div>
    </div>
  )
}

export default MovieList

