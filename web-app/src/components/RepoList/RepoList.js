import React from 'react';
import './RepoList.css';

function RepoList() {
    return (
        <section className='repo-list-extern-container-mod'>
            <div className='repo-section-internal-container'>
                <div className='repositories-attributes'>
                    <p className='user-name'>Repositories</p>
                    <div>
                        <p className='repo-section-name'>Source</p>
                    </div>
                </div>
                <div className='ul-repo-list'>
                    <ul className="container">
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                        <li className="repo-card-list">
                            <div className='d-flex flex-column'>
                                <a href="#"><p className=''>github-profile-viewer</p></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default RepoList;