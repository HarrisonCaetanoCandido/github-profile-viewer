import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import HorizontalContainer from './components/HorizontalContainer/HorizontalContainer';
import UserProfile from './components/UserProfile/UserProfile';
import RepoList from './components/RepoList/RepoList';
import Footer from './components/Footer/Footer';
import AboutTheProject from './components/AboutTheProject/AboutTheProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <SearchBar />
                <HorizontalContainer>
                  <div className='child-left user-profile-order'>
                    <UserProfile />
                  </div>
                  <div className='child-right user-list-order'>
                    <UserList />
                  </div>
                </HorizontalContainer>
                <RepoList />
                <Footer />
              </main>
            </>
          } />
          <Route path="/about-the-project" element={<AboutTheProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
