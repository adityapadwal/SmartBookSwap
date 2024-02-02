import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layoutWrapper/Layout';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';
import NewPasswordPage from './components/auth/NewPasswordPage';
import IndexPage from './components/index/IndexPage'
import BuyBookPage from './components/buyBook/BuyBookPage';
import SellBookPage from './components/sellBook/SellBookPage';
import ProfilePage from './components/profile/ProfilePage';
import HistoryPage from './components/profile/HistoryPage';
import ListedBooksPage from './components/profile/ListedBooksPage';
import SoldBooksPage from './components/profile/SoldBooksPage';
import TempPage from './components/testing/TempPage';
import { EditUserContextProvider, UserContextProvider } from './components/context/UserContext';

// configuring axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <EditUserContextProvider>
          <Routes>
            <Route path='/' element={<Layout />} > {/* LayoutWrapper */}

              <Route index element={<IndexPage />} /> {/* index */}

              <Route path='/login' element={< LoginPage />} /> {/* auth */}
              <Route path='/register' element={< RegisterPage />} /> {/* auth */}
              <Route path='/reset-password' element={<ResetPasswordPage />} /> {/* auth */}
              <Route path='/reset-password/:token' element={<NewPasswordPage />} /> {/* auth */}

              <Route path='/buy-book' element={<BuyBookPage />} /> {/* buyBook */}

              <Route path='/sell-book' element={<SellBookPage />} /> {/* sellBook */}

              <Route path='/profile' element={< ProfilePage />} /> {/* profile */}
              <Route path='/history' element={< HistoryPage />} /> {/* profile */}
              <Route path='/listedbooks' element={< ListedBooksPage />} /> {/* profile */}
              <Route path='/soldbooks' element={< SoldBooksPage />} /> {/* profile */}

              <Route path='/temp' element={< TempPage />} /> {/* testing */}

            </Route>
          </Routes>
        </EditUserContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App;
