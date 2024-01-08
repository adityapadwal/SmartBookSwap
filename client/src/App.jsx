import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';
// import AuthForm from './components/AuthForm';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

// configuring axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={< IndexPage/>}/>
          <Route path='/temp' element={< TempPage/>}/> {/* Only for testing */}
          <Route path='/login' element={< LoginPage/>}/>
          <Route path='/register' element={< RegisterPage/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App;
