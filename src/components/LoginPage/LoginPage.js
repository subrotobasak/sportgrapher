import React from 'react';
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import "./LoginPage.css"
import LogRegButton from '../LogRegButton/LogRegButton';
import GoogleButton from '../GoogleButton/GoogleButton';
import GitHubButton from '../GitHubButton/GitHubButton';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='from-area'>
            <Container>
                <div className='section-heading'>
                    <h3>Log In Now</h3>
                    <p>Please login to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={6} offset-lg={3}>
                        <Form>
                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Link to="/forgotpassword">Forgot Password?</Link> <LogRegButton button="Login" />
                            <p className="mt-3">
                                New to Spotographer? <Link to="/register">Please Create New Account.</Link>
                            </p>
                        </Form>
                        <div className='extra'>
                            <div></div>
                            <span>Or</span>
                            <div></div>
                        </div>
                        <GoogleButton />
                        <GitHubButton />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default LoginPage;