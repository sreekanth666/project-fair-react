import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({isDashboard}) {
    return (
        <Navbar expand="lg" style={{backgroundColor:'#004225'}}>
            <Container>
                <Navbar.Brand href="#home" className='text-light fs-2'><Link to='/' style={{textDecoration:'none'}} className='text-light'>Project Fair</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {
                    isDashboard == true &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <button className='btn btn-light'>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    )
}

export default Header