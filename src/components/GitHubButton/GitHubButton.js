import React from 'react';
import GithubImage from "../../images/github.png";
import "./GitHubButton.css"

const GitHubButton = () => {
    return (
        <div className='github-button'>
        <a href=' '> <img alt="" src = {GithubImage} /> Continue With GitHub </a>
            
        </div>
    );
};

export default GitHubButton;