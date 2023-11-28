import React, { useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../Contexts/TokenAuth'

function Header({isDashboard}) {
    const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorizationContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuthorized(false)
        navigate('/')
    }
    return (
        <Navbar expand="lg" style={{backgroundColor:'#004225'}}>
            <Container>
                <Navbar.Brand href="#home" className='text-light fs-2'><Link to='/' style={{textDecoration:'none'}} className='text-light'>Project Fair</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {
                    isDashboard == true &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <button className='btn btn-light' onClick={handleLogout}>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    )
}

export default Header