import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';
import ProfileLayout from './components/ProfileLayout';
import History from './components/History';
import SoldBooks from './components/SoldBooks';
import ListedBooks from './components/ListedBooks';
import SellBookForm from './components/SellBookForm';

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

          <Route index element={<IndexPage/>}/>
          <Route path='/sell-book' element={<SellBookForm/>} />
          <Route path='/temp' element={< TempPage/>}/> {/* Only for testing */}
          <Route path='/profile' element={< ProfileLayout/>}/>
          <Route path='/history' element={< History/>}/>
          <Route path='/soldbooks' element={< SoldBooks/>}/>
          <Route path='/listedbooks' element={< ListedBooks/>}/>
          <Route path='/login' element={< LoginPage/>}/>
          <Route path='/register' element={< RegisterPage/>}/>
          <Route path='/profiletemp' element={< ProfilePage/>}/>
          <Route path='/reset-password' element={<ResetPasswordPage/>}/>
          <Route path='/reset-password/:token' element={<NewPasswordPage/>}/>
          
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;
