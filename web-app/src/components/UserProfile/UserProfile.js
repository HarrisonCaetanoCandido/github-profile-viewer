import React from "react";
import profilePic from '../../assets/images/person.png';
import './UserProfile.css';

function UserProfile() {
    return (
        // Esta classe de section é estilizada em UserList.css
        <section className='user-list-extern-container'>
            <div className="d-flex all-user-info">
                <div className="user-img-column">
                    <p className='user-name'>User Profile</p>
                    <img className='profile-img' src={profilePic}
                        alt="Imagem de algum usuário"></img>
                </div>
                <div className='user-info'>
                    <div className="">
                        <p className="some-user-name">Some User</p>
                        <p className="some-user-id">SomeGithubProfile</p>
                    </div>
                    <div className="d-flex email-section">
                        <p className="info-hideon-mobile">Email:</p>
                        <p className="email-address">blablabla@somedomain.com</p>
                    </div>
                    <div className="d-flex profile-link-section">
                        <p className="info-hideon-mobile">Profile Link:</p>
                        <p className="profile-link">https://github.com/SomeGitHubProfile</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;