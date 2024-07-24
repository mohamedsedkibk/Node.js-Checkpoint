
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Addmovie({ addnewmovie}) {



    const [newmovie,setnewmovie]=useState({
        title:"" ,
        description:"" ,
        posterURL :""  ,
        trailer:"" ,
        rating: 1 
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const handlechange=(e)=>{
    setnewmovie(
       {
      ...newmovie, [e.target.name]:e.target.value
       }
    )
}

const add=()=>{
    addnewmovie(newmovie)
    handleClose ()
}

    const [show, setShow] = useState(false);

 
    return (

        <>
        <div className='d-flex justify-content-end   pe-5'>
            <Button className='mt-2' variant="primary" onClick={handleShow}>
                New movie
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='d-flex flex-column '>
                        <label>Title</label>
                        <input name='title' type='text'  onChange={handlechange}   >

                        </input>
                        <label>Description </label>
                        <input  name='description' type='text'  onChange={handlechange}  >

                        </input>

                        <label>Post Url </label>
                        <input  name='posterURL' type='text'    onChange={handlechange}   >

                        </input>

                        <label>Rating</label>
                        <input  name='rating' type='number' min={0}    onChange={handlechange}    > 

                        </input>
                        <label>Trailer</label>
                        <input  name='Trailer' type='text'    onChange={handlechange}    > 

                        </input>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={add}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addmovie


