import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';

// configuring axios
axios.defaults.baseURL = `http://localhost:8000`;
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={< IndexPage/>}/>
          <Route path='/login' element={< LoginPage/>}/>
          <Route path='/signup' element={< SignupPage/>}/>
          <Route path='/temp' element={< TempPage/>}/> {/* Only for testing */}
          
        </Route>
      </Routes>
    </>
  )
}

export default App
