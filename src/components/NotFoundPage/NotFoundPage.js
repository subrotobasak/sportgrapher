import React from 'react';
import "./NotFoundPage.css"
import Container from "react-bootstrap/esm/Container"
import CommonBanner from '../CommonBanner/CommonBanner';

const NotFoundPage = () => {
    return (
        <section className='not-found-page'>
            <div className='hero-area'>
            <CommonBanner/>
            </div>
            <div className='not-found'>
            <Container>
            <h2>404</h2>
            <h3>Not Found</h3>
            </Container>
            </div>
        </section>
    );
};

export default NotFoundPage;