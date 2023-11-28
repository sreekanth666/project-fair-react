import React, { useContext, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { loginAPI, registerAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../Contexts/TokenAuth';

function Auth({register}) {
    const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorizationContext)
    const navigate = useNavigate()
    const isRegisterForm = register?true:false

    // Handle registration
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleRegister = async(e) => {
        e.preventDefault()
        const {username, email, password} = userData
        if (!username || !email || !password) {
            toast.info("Please fill all details")
        } else {
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.username} has registered successfully`)
                navigate('/login')
            } else {
                toast.warning(result.response.data)
            }
        }
    }

    // Handle login
    const handleLogin = async(e) => {
        e.preventDefault()
        const{email, password} = userData
        console.log(email, password);
        if (!email || !password) {
            toast.info("Please enter username and password")
        } else {
            const result = await loginAPI(userData)
            if (result.status === 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                setIsAuthorized(true)
                setUserData({
                    email: "",
                    password: ""
                })
                navigate("/")
            } else {
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }
    
    // TESTS

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <ToastContainer />
            <div className="container">
                <div className="auth-container rounded-3 d-flex p-3" style={{backgroundColor:'#f5f5dc'}}>
                    <Row>
                        <Col>
                            <div className="image d-flex justify-content-center align-items-center" style={{height:'100%'}}>
                                <img src="https://www.planstudyabroad.com/images/login.png" alt="Login Image" className='img-fluid'  />
                            </div>
                        </Col>
                        <Col>
                            <div className="auth-form">
                                <div className='heading text-center'>
                                    <h2 className='m-0'>Project Fair</h2>
                                    {
                                        isRegisterForm ? 
                                            <p className='m-0'>Sign Up to Project Fair</p>
                                        :
                                            <p className='m-0'>Sign In to Project Fair</p>
                                    }
                                </div>
                                <div className="form mt-4">
                                    {
                                        isRegisterForm ?
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Username" value={userData.username} onChange={(e) => setUserData({...userData, username:e.target.value})} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" value={userData.email} onChange={(e) => setUserData({...userData, email:e.target.value})} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({...userData, password:e.target.value})} />
                                                </Form.Group>

                                                <Button variant="primary" type="submit" onClick={(e) => {handleRegister(e)}}>
                                                Register
                                                </Button>
                                            </Form>
                                        :
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserData({...userData, email:e.target.value})} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" onChange={(e) => setUserData({...userData, password:e.target.value})} />
                                            </Form.Group>

                                            <Button variant="primary" type="submit" onClick={(e) => {handleLogin(e)}}>
                                            Sign In
                                            </Button>
                                        </Form>
                                        }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Auth