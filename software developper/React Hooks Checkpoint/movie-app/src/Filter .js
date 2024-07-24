import React from 'react'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';


function Filter ({handlesearch,handlerate}) {

  return (
    <div className='m-2  '>
        <input  onChange={(e)=>handlesearch(e.target.value)}   style={{width:"500px"}} placeholder='search' type='search'>
        
        </input>

<div className='display-6 '>
<StarRatingComponent
    name="rate"
    onStarClick={(e)=>handlerate(e)}
/>


</div>
   
    </div>
  )
}

export default Filter 