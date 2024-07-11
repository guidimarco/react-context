import logo from './logo.svg';
import './App.css';
import UserInfoContext from './contexts/UserInfoContext';
import { ThemeProvider } from './contexts/ThemeProvider';
import BlogPage from './components/BlogPage';

function App() {

  const userInfo = {
    username: "Admin",
    isAdmin: true
  }

  return (
    <ThemeProvider>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
