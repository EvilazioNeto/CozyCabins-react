import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/usuario/landingPage/landingPage'
import Login from './pages/usuario/login/login'
import Cadastro from './pages/usuario/cadastro/cadastro'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastrar-se' element={<Cadastro />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
