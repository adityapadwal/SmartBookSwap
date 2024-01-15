import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import ResetPasswordPage from './components/ResetPasswordPage';
import NewPasswordPage from './components/NewPasswordPage';
import { UserContextProvider } from './components/UserContext';

// configuring axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={< IndexPage/>}/>
            <Route path='/temp' element={< TempPage/>}/> {/* Only for testing */}
            <Route path='/login' element={< LoginPage/>}/>
            <Route path='/register' element={< RegisterPage/>}/>
            <Route path='/account' element={< ProfilePage/>}/>
            <Route path='/reset-password' element={<ResetPasswordPage/>}/>
            <Route path='/reset-password/:token' element={<NewPasswordPage/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;
