import React from 'react'
import Header from '../Components/Header'
import { InputGroup, Form, Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
    return (
        <>
            <Header />
            <div className='container text-center mt-3 b-3'>
                <h2>All Projects</h2>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <Form.Control
                    placeholder="Search project by technology"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                </InputGroup>
            </div>

            <div className='mb-5 mt-5'>
                <ProjectCard />
            </div>
        </>
    )
}

export default Projects