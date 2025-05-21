import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo=(props)=>{

    
    //Es un objeto, se puede desestructurar
    const {colorPrimario, colorSecundario, titulo, id}=props.datos
    //Obtenemos el color con opacidad
    const primarioOpaco= hexToRgba(colorPrimario, 0.6);
    //Aquí es un arreglo, no se puede desestructurar, se mapea
    const{colaboradores, eliminarColaborador, actualizarColorEquipo}=props
    //Obtenemos lo enviado desde app.js

    //
    return <>
    {colaboradores.length>0 && 
        <section className="equipo" style={{backgroundColor:primarioOpaco}}>
        <input type="color" className="input-color" value={primarioOpaco} onChange={(e)=>{
            actualizarColorEquipo(e.target.value, titulo, id)
        }} ></input>
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
        {

            //mapeamos; hacemos un colaborador por cada espacio del array (por eso el index)
            //en el arreglo colaboradores, hazme un componente colaborador por cada colaborador existente
            colaboradores.map((colaborador, index)=>
            <Colaborador
            key={index} 
            colaborador={colaborador} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            ></Colaborador>

            
        )}
        </div>
    </section>
    }
    </>
}

export default Equipo