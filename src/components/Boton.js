import React from 'react'

const Boton = ({nom, estado, click}) => {
  return (
    <div>
    <label>Cantidad de clics: {click}</label>
    <button onClick={estado}>{nom}</button>
    </div>
  )
}

export default Boton