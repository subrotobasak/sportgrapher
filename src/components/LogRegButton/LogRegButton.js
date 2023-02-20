import React from 'react';
import { Link } from 'react-router-dom';
import "./LogRegButton.css"
const LogRegButton = (props) => {
    return (
        <div className='login-button'>
            {/* <a href=" ">{props.button}</a> */}
            <Link to="">{props.button}</Link> 
        </div>
    );
};

export default LogRegButton;

