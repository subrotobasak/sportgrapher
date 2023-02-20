import React from 'react';
import "./GoogleButton.css"
import GoogleImage from "../../images/google.png";

const GoogleButton = ({image, text}) => {
    return (
        <div className='google-button'>
            <a href=' '> <img src= {GoogleImage} alt=""/> Continue With Google</a>
        </div>
    );
};

export default GoogleButton;

