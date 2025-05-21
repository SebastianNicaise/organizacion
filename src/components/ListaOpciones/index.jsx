import "./ListaOpciones.css"

const ListaOpciones=({valor, actualizarValor, equipos})=>{
    //recibimos equipo

    //método map arreglo.map((equipo, index)=>{
        // hará lo que indiquemos con eso})

    const manejarCambio=(e)=>{
        actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index)=>{
                //Le damos el key para darle señal de hacer algo, como en este caso es único, le damos el index
                //cada diccionario de datos tiene un index
                return <option key={index} value={equipo}>{equipo}</option>
            })
            }
        </select>
    </div>


}

export default ListaOpciones