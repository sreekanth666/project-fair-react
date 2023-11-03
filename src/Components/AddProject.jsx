import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function AddProject() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn-info p-2' onClick={handleShow}>Add Project</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="">
                                <input type="file" style={{display:"none"}} />
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" className='img-fluid'/>
                            </label>
                        </div>
                        <div className="col-6">
                            <input type="text" className='form-control' placeholder='Project Title' />
                            <input type="text" className='form-control mt-2' placeholder='Language Used' />
                            <input type="text" className='form-control mt-2' placeholder='GitHub Link' />
                            <input type="text" className='form-control mt-2' placeholder='Website Link' />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <textarea name="" id="" rows="5" className='form-control'></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject