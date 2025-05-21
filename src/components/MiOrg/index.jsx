import { useState } from "react"
import "./MiOrg.css"

const MiOrg=({cambiarMostrar})=>{
    //Estado - hooks: funcionalidades que trabajan con el comportamiento de react
    //useState  
    //useState() recibe un valor inicial y una variable que se encarga de cambiar ese estado
    //Funciona como un espacio de memoria, pero para utilizarlo debemos usar constantes
    //const[nombre, actualizarNombre] = useState("Sebastián")->nombre sería sebas... y la función encargada de 
    //actualizarlo es actualizar nombre, que lo actualizará inmediatamente como con ajax, es como  un estado 
    //por defecto al cargar el componente o la página

    const[mostrar, actualizarMostrar] = useState(true)

    const manejarClick=()=>{
        //Llamamos a la función para cambiar el estado de mostrar
        actualizarMostrar(!mostrar)
    }

    //recibimos mediante props la función cambiarMostrar y la mandamos a llamar al darle click
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={cambiarMostrar}></img>


    </section>
}


export default MiOrg