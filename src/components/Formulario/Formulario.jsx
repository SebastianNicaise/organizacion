import { useState } from "react"
import Boton from "../Boton"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import "./Formulario.css"

const Formulario=({equipos, registrarColaborador})=>{

    //recibimos los valores del array equipos y los pasamos en el componente sin tocar nada
    //valor
    const [nombre, setNombre]=useState("")
    const [puesto, setPuesto]=useState("")
    const [foto, setFoto]=useState("")
    const [equipo, setEquipo]= useState("")


    const manejarEnvio=(e)=>{ //puede ser evento, e, lo que sea, es para recibir el evento del form,
        //el cual se dispara al ejecutar onsubmit, de modo predeterminado su evento es recargar la página
        //Evita que se recargue la página
        e.preventDefault()

        let datosAEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        //Ahora podemos enviar nuestros datos a un backend, por ejemplo a php e insertarlo a una bd
        registrarColaborador(datosAEnviar)
    }
    //recibimos los valores del array equipos y los pasamos en el componente sin tocar nada
    return <section className="formulario">
       <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        
        <CampoTexto 
       nombreCampo="nombre" 
        valor={nombre} 
        actualizarValor={setNombre}>
        </CampoTexto>
        
        <CampoTexto 
        nombreCampo="puesto" 
        valor={puesto} 
        actualizarValor={setPuesto}>
        </CampoTexto>
        
        <CampoTexto 
        nombreCampo="foto" 
        valor={foto} 
        actualizarValor={setFoto}>
        </CampoTexto>
        
        <ListaOpciones 
        valor={equipo} 
        actualizarValor={setEquipo} 
        equipos={equipos}>
        </ListaOpciones>
        
        <Boton

        texto="Crear">

        </Boton>
       </form>
    </section> 
}


export default Formulario