import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Categorias from './pages/Categorias'
import Detalle from './pages/Detalle'
import Electronicos from './pages/Electronicos'
import Inicio from './pages/Inicio'
import Joyeria from './pages/Joyeria'
import Ofertas from './pages/Ofertas'
import RopaHombre from './pages/RopaHombre'
import RopaMujer from './pages/RopaMujer'
import Soporte from './pages/Soporte'

function App() {

  return (
    <section>
      <NavBar />
      <Routes>
         <Route path="/" element={<Inicio/>}/>

         <Route path="/category" element={<Categorias/>}/>
         <Route path="/category/:categoryId" element={<Categorias/>}/>
         <Route path="/hombres" element={<RopaHombre/>}/>
         <Route path="/mujeres" element={<RopaMujer/>}/>
         <Route path="/joyeria" element={<Joyeria/>}/>
         <Route path="/electronicos" element={<Electronicos/>}/>

         <Route path="/soporte" element={<Soporte/>}/>
         <Route path="/ofertas" element={<Ofertas/>}/>
         <Route path="/item/:id" element={<Detalle/>}/>
      </Routes>
      <Footer/>
    </section>
  )
}

export default App
