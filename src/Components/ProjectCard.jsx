import React from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import project1 from '../Assets/Images/pr1.png'

function ProjectCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container-fluid'>
            <Card className='shadow' onClick={handleShow} style={{ width: '18rem' }}>
                <Card.Img variant='top' src={project1} style={{width:'250px'}}></Card.Img>
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src={project1} alt="Project Thumbnail" className='img-fluid border' />
                        </Col>
                        <Col>
                            <h4>Project Title</h4>
                            <p><span className='fw-semibold'>Project Overview: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde. Nam saepe velit consequatur voluptate temporibus nemo minus esse consectetur quaerat quidem! Sapiente dignissimos porro unde quasi assumenda hic eos?</p>
                            <p><span className='fw-semibold'>Using: </span>React, HTML, CSS, JS</p>
                        </Col>
                    </Row>
                    <div className='links d-flex'>
                            <a href="http://" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} className='text-dark'>
                                <i className="fa-brands fa-github fs-3 m-2"></i>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} className='text-dark'>
                                <i className="fa-solid fa-link fs-3 m-2"></i>
                            </a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard