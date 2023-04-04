import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegation from './components/Navegation';
import Home from "./pages/Home";
import ListaDoctor from './pages/ListaDoctor';
import ListaPaciente from "./pages/ListaPaciente";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar"

const App = () => {
  return(
    <BrowserRouter>
    <Navegation/>
        <Routes>
        <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/listapa" element={<ListaPaciente/>}/>
            <Route path='/listad' element={<ListaDoctor/>}/>
            <Route path="/registrar" element={<Registrar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App