import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import HorizontalContainer from './components/HorizontalContainer/HorizontalContainer';
import UserProfile from './components/UserProfile/UserProfile';
import RepoList from './components/RepoList/RepoList';
import Footer from './components/Footer/Footer';
import AboutTheProject from './components/AboutTheProject/AboutTheProject';
import { Octokit } from '@octokit/rest';

// Instancio o objeto que interage com a api do github, com o token que dá permissões especiais de usuário e repositório
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN, });

/*
OBSERVAÇÃO:
- Todas as chamadas assíncronas à api são feitas para não bloquear a execução do resto da interface,
portanto, o cliente consegue interagir com a página enquanto espera resposta do GitHub
*/

function App() {
  // Defino três estados que retornam arrays: 
  // um para armazenar usuários encontrados,
  // outro para armazenar os repositórios do usuário atualmente selecionado,
  // e um ultimo para exibir perfil de usuario clicado
  const [users, setUsers] = useState([]);
  const [selectedUserRepos, setSelectedUserRepos] = useState([]);
  const [profile, setProfile] = useState('');

  // Função assíncrona para buscar repositórios e usuários com base na consulta
  const fetchData = async (query) => {
    try {
      // Busco por repositórios que correspondem à query
      const repoResponse = await octokit.search.repos({
        q: `${query} in:name`,
      });

      // Busco por usuários que correspondem a query
      const userResponse = await octokit.search.users({
        q: `${query} in:name`,
      });

      let userDetailsList;

      // Esse caso geralmente ocorre quando a busca por nomes de repositórios retorna vazia
      // Neste caso, precisamos exibir o perfil do proprietário do repositório
      if (userResponse.data.total_count < 1) {
        userDetailsList = repoResponse.data.items.map(async repo => {
          // Encontrei alguns bugs na busca quando o repositório é buscado na search bar
          // por isso o try-catch
          try {
            // Extraio o login do dono do repositório
            const username = repo.owner.login;

            // Busco os detalhes do usuário pelo nome de usuário
            const userDetails = await octokit.users.getByUsername({ username });
            return userDetails.data;
          } catch (error) {
            console.error(`Error fetching user details for ${repo.owner.login}`, error);
            return null;
          }
        });
      } else {
        // Mapeio cada usuário para buscar detalhes adicionais
        // getByUsername retorna uma Promise, que então precisa ser processada para que os dados
        // nela sejam retornados ao nó da lista
        userDetailsList = userResponse.data.items.map(user =>
          octokit.users.getByUsername({ username: user.login }).then(response => response.data)
        );
      }

      // Espero todas as chamadas assíncronas para obter detalhes dos usuários
      const userDetails = await Promise.all(userDetailsList);
      // Aqui filtro usuários nulos
      let detailedUsers = userDetails.filter(user => user !== null);

      // Se existir mais de um usuário, elimino até deixar apenas um
      detailedUsers = detailedUsers.filter((user, index, self) =>
        index === self.findIndex((t) => (
          t.id === user.id
        ))
      );

      // Se só tiver um usuário, eu já exibo os dados dele no componente User Profile
      if (detailedUsers.length == 1)
        handleUserClick(detailedUsers[0].login);

      console.log("User Details:", detailedUsers);

      // Atualizo o estado de usuários com os detalhes obtidos
      setUsers(detailedUsers);

      // Atualizo o estado de repositórios com os repositórios encontrados
      setSelectedUserRepos(repoResponse.data.items);
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
      setUsers([]);
      setSelectedUserRepos([]);
    }
  }

  // Função para lidar com o clique em um usuário na lista de users
  const handleUserClick = async (username) => {
    try {
      // Busco os repositórios desse usuário específico
      const userReposResponse = await octokit.repos.listForUser({
        username: username,
      });

      const userProfile = await octokit.users.getByUsername({ username });

      setProfile(userProfile.data);

      // Atualizo os repositórios do usuário selecionado
      setSelectedUserRepos(userReposResponse.data);
    } catch (error) {
      console.error("Error fetching user repositories from GitHub API", error);
      setSelectedUserRepos([]);
    }
  }

  return (
    // Habilito o roteamento com BrowseRouter
    <BrowserRouter>
      <div className="App">
        {/* Defino todas as rotas, no caso duas aqui: uma para a home e outra para a About The Project */}
        <Routes>
          {/* Primeira rota, home */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                {/* Renderizo searchbar e passo fetchData como prop, ou seja, fetchData é chamada */}
                <SearchBar onSearch={fetchData} />
                <HorizontalContainer>
                  <div className='child-left user-profile-order'>
                    {/* Renderizo UserProfile e passo o estado profile */}
                    <UserProfile profile={profile} />
                  </div>
                  <div className='child-right user-list-order'>
                    {/* Renderizo userList e passo repos como prop */}
                    <UserList users={users} handleUserClick={handleUserClick} />
                  </div>
                </HorizontalContainer>
                {/* Renderizo repolist e passo repos como prop */}
                <RepoList repos={selectedUserRepos} />
                <Footer />
              </main>
            </>
          } />
          {/* Segunda rota, about the project */}
          <Route path="/about-the-project" element={<AboutTheProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
