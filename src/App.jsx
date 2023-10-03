import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Categorias from './pages/Categorias'
import Detalle from './pages/Detalle'
import Inicio from './pages/Inicio'
import Ofertas from './pages/Ofertas'
import Soporte from './pages/Soporte'

function App() {

  return (
    <section>
      <NavBar />
      <Routes>
         <Route path="/" element={<Inicio/>}/>

         <Route path="/category/:id" element={<Categorias/>}/>
         <Route path="/ofertas" element={<Ofertas/>}/>
         <Route path="/soporte" element={<Soporte/>}/>

         <Route path="/item/:id" element={<Detalle/>}/>
      </Routes>
    </section>
  )
}

export default App
