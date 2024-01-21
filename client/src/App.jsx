import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import TempPage from './components/TempPage';
import { Route, Routes } from 'react-router-dom';
import SellBookForm from './components/SellBookForm';

// configuring axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={<IndexPage/>}/>
          <Route path='/sell-book' element={<SellBookForm/>} />
          <Route path='/temp' element={< TempPage/>}/> {/* Only for testing */}
         
        </Route>
      </Routes>
    </>
  )
}

export default App;
