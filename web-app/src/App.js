import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import HorizontalContainer from './components/HorizontalContainer/HorizontalContainer';
import UserProfile from './components/UserProfile/UserProfile';
import RepoList from './components/RepoList/RepoList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
