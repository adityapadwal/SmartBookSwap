import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import AuthForm from './components/authForm';

function App() {
  return (
    <>
      <Navbar/>
      <section>
        <Routes>
          <Route path="/authForm" element={<AuthForm />} />
        </Routes>
      </section>
    </>
  )
}

export default App;
