import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImage from "../../images/man.jpg"
import "./AboutText.css"

const AboutText = () => {
    return (
        <section className='about-text-area'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className='about-image'>
                            <img src={AboutImage} alt="" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className ="about-text">
                            <h3>I'm Subroto Basak Shawon</h3>
                            <h2>About My Goal</h2>
                            <p>Thanks for reaching out to me. I would love to share my qualifications and experiences with you might be interested in. I have completed BSc Hons degree in Computer Science & Engineering CSE. I prefer to become a well-known IT Specialist in my career. I have an interest in Android application and game development too.
</p>
                            </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default AboutText;