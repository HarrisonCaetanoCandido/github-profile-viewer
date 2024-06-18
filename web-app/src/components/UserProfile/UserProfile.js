import React from "react";
import profilePic from '../../assets/images/person.png';
import './UserProfile.css';

function UserProfile({ profile }) {
    const someUser = "Without User Name";
    const someGithubProfile = "SomeGithubProfile";
    const someEmail = "No public email";
    const someGithubProfileLink = "https://github.com/SomeGitHubProfile";
    const sendEmail = 'mailto:' + profile.email;

    return (
        // Esta classe de section é estilizada em UserList.css
        <section className='user-list-extern-container'>
            <div className="d-flex all-user-info">
                <div className="user-img-column">
                    <p className='user-name'>User Profile</p>
                    <img className='profile-img' src={profile.avatar_url || profilePic}
                        alt="Imagem de algum usuário"></img>
                </div>
                <div className='user-info'>
                    <div className="">
                        <p className="some-user-name">{profile.name || someUser}</p>
                        <p className="some-user-login">{profile.login || someGithubProfile}</p>
                    </div>
                    <div className="d-flex email-section">
                        <p className="info-hideon-mobile">Email:</p>
                        <a href={sendEmail}><p className="email-address">{profile.email || someEmail}</p></a>
                    </div>
                    <div className="d-flex profile-link-section">
                        <p className="info-hideon-mobile">Profile Link:</p>
                        <a href={profile.html_url} target="_blank"><p className="profile-link">{profile.html_url || someGithubProfileLink }</p></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;