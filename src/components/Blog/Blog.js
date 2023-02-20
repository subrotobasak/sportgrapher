import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import CommonBanner from '../CommonBanner/CommonBanner';
import Question from '../Question/Question';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./Blog.css";

const Blog = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch("questions.json")
            .then((res) => res.json())
            .then((data) => setPost(data));
    })
    return (
        <>
            <CommonBanner />
            <section className='blog-area'>
                <Container>
                    <SectionHeading heading="Questions Answer" />
                    <Row>
                        {
                            post.map((item) => <Question key={item.id} item={item} />)
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Blog;