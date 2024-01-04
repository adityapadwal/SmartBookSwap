import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';

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
          <Route path='/login' element={< AuthForm/>}/>
          
        </Route>
      </Routes>
    </>
  )
}

export default App;
