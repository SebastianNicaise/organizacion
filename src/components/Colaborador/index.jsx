import "./Colaborador.css"
import { MdOutlineAutoDelete } from "react-icons/md";

const Colaborador = ({colaborador, colorPrimario, eliminarColaborador}) => {
    console.log(colaborador)
    return <div className="colaborador">
        <MdOutlineAutoDelete className="eliminar" onClick={()=>eliminarColaborador(colaborador.id)}>Eliminar</MdOutlineAutoDelete>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={colaborador.foto} alt={colaborador.nombre} />
        </div>
        <div className="info">
            <h4>{colaborador.nombre}</h4>
            <h5>{colaborador.puesto}</h5>
        </div>
    </div>
    
};
export default Colaborador