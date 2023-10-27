import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';

function Auth({register}) {
    const isRegisterForm = register?true:false
    console.log(register);
    console.log(isRegisterForm);
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
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
                                                <Form.Control type="text" placeholder="Username" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                Sign Up
                                                </Button>
                                            </Form>
                                        :
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
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