import React from 'react';
import './UserList.css';
import profilePic from '../../assets/images/person.png';


function UserList({ users, handleUserClick }) {
    return (
        <section className='user-list-extern-container'>
            <p className='user-name mb-3 ms-3 mt-3'>Users</p>
            <div className='ul-user-list'>
                <ul className="list-group container">
                    {/* Faço mapeamento semelhante ao feito em RepoList. A diferença aqui é que ao 
                    clicar num item da lista, a função handleUserClick será chamada para 
                    carregar a lista de repositórios daquele usuário*/}
                    {users.map(user => (
                        <li key={user.id} className="list-group-item card-list" onClick={() => handleUserClick(user.login)}>
                            <div className="d-flex">
                                <img className='user-img' src={user.avatar_url || profilePic}
                                    alt="Imagem de algum usuário"></img>
                                <div className='d-flex ms-3 flex-column'>
                                    <p className='user-name'>{user.name || user.login}</p>
                                    <p className='login'>{user.login}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default UserList;

