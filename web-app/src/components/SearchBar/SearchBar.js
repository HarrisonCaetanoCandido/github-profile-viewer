import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
    return (
        <section className='section-extern-container'>
            <div className='section-internal-container'>
                <div className='left-section-internal-container'>
                <Link to="/about-the-project" className="about-project">After all, what is the GitHub Profile Viewer?</Link>
                </div>
                <div className='right-section-internal-container'>
                    <form method="GET" action="">
                        <input className="search-form" type="text" name="search" placeholder="Search..."></input>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SearchBar;
