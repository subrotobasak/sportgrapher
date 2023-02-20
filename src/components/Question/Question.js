import React from 'react';
import { Col } from 'react-bootstrap';
import "./Question.css"

const Question = ({item}) => {
    return (
        <Col lg={4}>
            <div className='single-post'>
                <h3>
                    {item.question}
                </h3>

                <p>
                {item.answear}
                </p>

            </div>
        </Col>
    );
};

export default Question;