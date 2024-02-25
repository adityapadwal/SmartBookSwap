import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layoutWrapper/Layout';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';
import NewPasswordPage from './components/auth/NewPasswordPage';
import IndexPage from './components/index/IndexPage'
import BooksIndexPage from './components/books/BooksIndexPage';
import SellBookPage from './components/sellBook/SellBookPage';
import ProfilePage from './components/profile/ProfilePage';
import HistoryPage from './components/profile/HistoryPage';
import ListedBooksPage from './components/profile/ListedBooksPage';
import SoldBooksPage from './components/profile/SoldBooksPage';
import TempPage from './components/testing/TempPage';
import BookPage from './components/book/BookPage';
import { EditUserContextProvider, UserContextProvider } from './components/context/UserContext';
import { BookDetailsContextProvider } from './components/context/BookDetailsContext';
import Cart from './components/Cart/Cart';

// configuring axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <EditUserContextProvider>
          <BookDetailsContextProvider>
          <Routes>
            <Route path='/' element={<Layout />} > {/* LayoutWrapper */}

              <Route index element={<IndexPage />} /> {/* index */}

              <Route path='/login' element={< LoginPage />} /> {/* auth */}
              <Route path='/register' element={< RegisterPage />} /> {/* auth */}
              <Route path='/reset-password' element={<ResetPasswordPage />} /> {/* auth */}
              <Route path='/reset-password/:token' element={<NewPasswordPage />} /> {/* auth */}

              <Route path='/books' element={<BooksIndexPage />} /> {/* books */}
              <Route path='/books/:id' element={<BookPage />} /> {/* book */}

              <Route path='/cart' element={<Cart />} /> {/* cart */}

              <Route path='/sell-book' element={<SellBookPage />} /> {/* sellBook */}

              <Route path='/profile' element={< ProfilePage />} /> {/* profile */}
              <Route path='/history' element={< HistoryPage />} /> {/* profile */}
              <Route path='/listedbooks' element={< ListedBooksPage />} /> {/* profile */}
              <Route path='/soldbooks' element={< SoldBooksPage />} /> {/* profile */}

              <Route path='/temp' element={< TempPage />} /> {/* testing */}

            </Route>
          </Routes>
          </BookDetailsContextProvider>
        </EditUserContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App;
