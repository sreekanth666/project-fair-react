import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorizationContext } from './Contexts/TokenAuth';

function App() {
  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorizationContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/dashboard' element={isAuthorized ? <Dashboard /> : <Home />} />
        <Route path='/projects' element={isAuthorized ? <Projects /> : <Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
