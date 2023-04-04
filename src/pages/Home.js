import React,{useEffect, useState} from 'react'
import Boton from '../components/Boton';
const Home = () => {
  let [clic, setClic] = useState(0);
    const Sumar=(e)=>{
        e.preventDefault();
        setClic(clic+1)
    }
    const Restar=(e)=>{
        e.preventDefault();
        if(clic!==0){
        setClic(clic-1)}
    }

    const Reiniciar=(e)=>{
        e.preventDefault();
      setClic(clic=0)
    }
  return (
    <div>
    <h1>Examen-Angel</h1>
    <br/><br/>
    <Boton nom="Sumar+1" estado={Sumar} click={clic}/> 
    <Boton nom="Restar-1" estado={Restar} click={clic}/>
    <Boton nom="Reiniciar" estado={Reiniciar} click={clic}/>
    </div>

    
    )
}

export default Home