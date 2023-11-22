import React from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import project1 from '../Assets/Images/pr1.png'
import { base_url } from '../Services/baseurl';

function ProjectCard({projectDetails}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(projectDetails);
    return (
        <div className='container-fluid'>
            <Card className='shadow' onClick={handleShow} style={{ width: '18rem' }}>
                <Card.Img variant='top' src={projectDetails?`${base_url}/uploads/${projectDetails?.projectImage}`:project1} style={{width:'250px'}}></Card.Img>
                <Card.Body>
                    <Card.Title>{projectDetails?.title}</Card.Title>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{projectDetails?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src={projectDetails?`${base_url}/uploads/${projectDetails?.projectImage}`:project1} alt="Project Thumbnail" className='img-fluid border' />
                        </Col>
                        <Col>
                            <h4>{projectDetails?.title}</h4>
                            <p><span className='fw-semibold'>Project Overview: </span>{projectDetails?.overview}</p>
                            <p><span className='fw-semibold'>Using: </span>{projectDetails?.languages}</p>
                        </Col>
                    </Row>
                    <div className='links d-flex'>
                            <a href={projectDetails?.github} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} className='text-dark'>
                                <i className="fa-brands fa-github fs-3 m-2"></i>
                            </a>
                            <a href={projectDetails?.website} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} className='text-dark'>
                                <i className="fa-solid fa-link fs-3 m-2"></i>
                            </a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard