import { useState } from "react"

import "./CampoTexto.css"

const CampoTexto=({nombreCampo, valor, actualizarValor})=>{


//e o cualquier variable que maneje el evento va a desplegar información de ese evento
//En este caso, cada vez que algo cambie, la función que se realiza con el evento envía información
//con e.target.value accedemos al valor que se digitó en el input


    const manejarCambio=(e)=>{
        actualizarValor(e.target.value)
 
    }

    return <div className="campo-texto">
            <label>{nombreCampo}</label>
            <input 
            placeholder={`Ingresar ${nombreCampo}...`}
            value={valor}
            onChange={manejarCambio}
            >
            </input>
    </div>


}

export default CampoTexto