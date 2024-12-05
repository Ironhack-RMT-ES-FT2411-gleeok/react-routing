import { useState } from 'react'
import './App.css'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MyProfile from './pages/MyProfile'
import AllUsers from './pages/AllUsers'

import { Routes, Route, Link } from 'react-router-dom'
import Perfil from './pages/Perfil'

// Usando routing, APP se vuelve un controlador de rutas
function App() {

  const [ userProfile, setUserProfile ] = useState({ username: "bob", city: "sydney" })

  return (
    <div>

      <nav>
         <Link to="/">Ir a home</Link>
         <br />
         <Link to="/contactanos">Contactanos</Link>
         <br />
         <Link to="/about/staff">Sobre nosotros</Link>
         <br />
         <Link to="/my-profile">Mi perfil</Link>
         <br />
         <Link to="/all-users">Todos los usuarios</Link>
         {/* en react NUNCA usamos etiquetas de tipo a para navegación interna */}
      </nav>

      <hr />

      <Routes>
        {/* aqui estarian organizados todos los accesos (URL) de la página. funciona como un condicional */}

        <Route path="/" element={  <Home /> }/>
        <Route path="/contactanos" element={  <Contact /> }/>
        <Route path="/about/staff" element={  <About /> }/>
        <Route path="/my-profile" element={ <MyProfile data={userProfile}/> }/>
        <Route path="/all-users" element={  <AllUsers /> }/>
        <Route path="/profile/:nombreDeUsuario" element={  <Perfil /> }/>
        {/* parametro dinamico es una cajita que almacenará CUALQUIER valor que tenga el url en esa posición */}

        <Route path="*" element={  <NotFound /> }/>

      </Routes>

      <hr />

      <footer>
        <p>footer que siempre se ve</p>
      </footer>

    </div>
  )
}

export default App
