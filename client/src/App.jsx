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
          <Route path='/profilelayout' element={< ProfileLayout/>}/>
          <Route path='/history' element={< History/>}/>
          <Route path='/soldbooks' element={< SoldBooks/>}/>
          <Route path='/listedbooks' element={< ListedBooks/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
