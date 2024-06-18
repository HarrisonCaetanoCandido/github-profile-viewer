import React from 'react';
import './RepoList.css';

function RepoList({ repos }) {
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
                        {/* Vamos iterar sobre repos e mapear cada nó da lista para um li (item da lista ul) 
                            Adiciono uma key para que o projeto possa identificar cada li como um objeto único*/}
                        {repos.map(repo => (
                            <li key={repo.id} className="repo-card-list card-list">
                                <div className='d-flex flex-column'>
                                    <a href={repo.html_url} target='_blank' rel="noopener noreferrer"><p className=''>{repo.name}</p></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default RepoList;