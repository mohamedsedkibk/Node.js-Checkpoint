import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";

function MovieCard({ elm }) {
  return (
    <div >
      <Card style={{ width: '18rem', }}>
        <Card.Body>
          <Card.Title className='text-primary  fs-1 ' style={{height:"90px"}}>   {elm.title}</Card.Title>
          <Card.Img variant="top" src={elm.posterURL} style={{height:"250px"}} />
        </Card.Body>
        <ListGroup >
          <ListGroup.Item style={{height:"300px"}} >{elm.description}</ListGroup.Item>


          <div className='text-center display-6'>

            <StarRatingComponent
              name="rating" /* name of the radio input, it is required */
              value={elm. rating} /* number of selected icon (`0` - none, `1` - first) */
              editing={true} /* is component available for editing, default `true` */
            />
          </div>





        </ListGroup>
        <Card.Body  >
         <button className='btn btn-dark'> <Link to={`/movie/${elm.id}`}>more details</Link> </button>
        </Card.Body>
      </Card>



    </div>
  )
}

export default MovieCard