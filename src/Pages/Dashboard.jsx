import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
    const [username, setUsername] = useState("")
    console.log(username);
    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
        }
    },[])
    return (
        <>
            <Header isDashboard/>
            <div className='container-fluid mt-5 mb-5'>
                <Row>
                    <Col sm={12} md={8} className='mb-4' >
                        <h3>Welcome <span className='username'>{username}</span></h3>
                        <MyProjects />
                    </Col>
                    <Col sm={12} md={4} >
                        <Profile />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Dashboard