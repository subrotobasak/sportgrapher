import React from "react";
import Col from "react-bootstrap/Col";
import "../SingleImage/SingleImage.css"

const SingleImage = ({ item }) => {
    return (
        <Col lg={3}>
            <div className="single-image">
                <img className="w-100" src={item.img} alt=""></img>
            </div>
        </Col>
    );
}

export default SingleImage;