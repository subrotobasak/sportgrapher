import React from 'react';
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import LogRegButton from '../LogRegButton/LogRegButton';
const ForgetPassWord = () => {
    return (
        <div className='from-area'>
            <Container>
                <div className='section-heading'>
                    <h3>Forgot Password</h3>
                    <p>Please put email address and click submit.</p>
                </div>
                <Row>
                    <Col lg={6} offset-lg={3}>
                        <Form>
                            
                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                                <LogRegButton button="Submit" />
                            </Form.Group>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ForgetPassWord;