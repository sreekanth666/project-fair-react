import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import projectImage from '../Assets/Images/project.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Services/allAPI'

function Home() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [homeProject, setHomeProject] = useState([])
    const getHomeProject = async() => {
        const result = await homeProjectAPI()
        setHomeProject(result.data)
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }

        // API Call
        getHomeProject()
    },[])
    return (
        <>
            {/* Landing Section */}
            <div className="container-fluid" style={{height:"100vh", backgroundColor:'#f5f5dc'}}>
                <Row className='align-items-center p-3'>
                    <Col sm={12} md={6}>
                        <h1 style={{fontSize:'5rem'}}>Project Fair</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima quas, repellendus excepturi iusto totam nulla sapiente dolores voluptatum est, omnis, libero beatae consequatur quos velit. Laborum deleniti atque nam?</p>
                        {
                            loggedIn ?
                            <Link to='/dashboard'><button className='btn-primary p-2 '>Manage your projects</button></Link>
                            :
                            <Link to='/login'><button className='btn-primary p-2 '>Let's Explore</button></Link>

                        }
                    </Col>
                    <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                        <img src={projectImage} alt="Project Image" className='img-fluid mt-5 mb-2' style={{width:'400px'}} />
                    </Col>
                </Row>
            </div>

            {/* All Projects Section */}
            <div className="container-fluid pt-3">
                <h2 className='text-center'>All Projects</h2>
                <marquee scrollAmount={10}>
                    <div className='mt-3 mb-3 d-flex'>
                        {
                            homeProject.length > 0 ?
                            homeProject.map((item) => (
                                <div className='me-2'><ProjectCard projectDetails = {item}/></div>
                            )) : ""
                        }
                    </div>
                </marquee>
                <Link to={'/projects'} style={{textDecoration:'none'}} className='text-dark fw-semibold text-center'><p>View More Projects</p></Link>
            </div>
        </>
    )
}

export default Home