import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/usuario/landingPage/landingPage'
import Login from './pages/usuario/login/login'
import Cadastro from './pages/usuario/cadastro/cadastro'
import Layout from './layout/Layout'
import Home from './pages/usuario/home/home'
import cabanasDB from './data/db.json';
import PaginaCabana from './pages/usuario/cabana/cabana'
import { useEffect } from 'react'

function App() {
  function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <Router>
        <ScrollToTopOnMount />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrar-se' element={<Cadastro />} />
          <Route path='/home' element={<Layout> <Home /> </Layout>} />
          {cabanasDB.cabanas.map((cabana) => (
            <Route key={cabana.id} path={`/${cabana.nome}`} element={<Layout> <PaginaCabana cabana={cabana} /> </Layout>} />
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App
