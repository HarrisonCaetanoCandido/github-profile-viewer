import React from 'react';
import './Header.css';
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md header-intern-elements">
                <h1>GitHub Profile Viewer</h1>
                <div className="header-buttons d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/hcandido/" target="_blank"><img src={linkedin} className="linkedin" alt="logo do linkedin"></img></a>
                    <a href="https://github.com/HarrisonCaetanoCandido" target="_blank"><img src={github} className="github" alt="logo do github"></img></a>
                </div>
            </div>
        </nav>
    );
}

export default Header;