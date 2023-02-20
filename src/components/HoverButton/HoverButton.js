import React from 'react';
import "../HoverButton/HoverButton.css"

const HoverButton = (props) => {
    return (
        <div className='hover-button'>
            <a href=" ">{props.button}</a>
        </div>
    );
};

export default HoverButton;