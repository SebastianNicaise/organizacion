import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/header/Header';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import {v4 as uuidv4} from 'uuid'

function App() {
  //Hijos del componente app aquí


  //Declaramos el useState en el componente padre
  const[mostrarFormulario, actualizarMostrarFormulario]= useState(false)
  //Iniciamos con un array vacío al registrar una lista
  const[colaboradores, actualizarColaboradores]= useState([{
    id: uuidv4(),
    equipo:"Front End",
    foto: "https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg",
    nombre: "John Cena",
    puesto: "Instructor"
  },
{
  id: uuidv4(),
  equipo:"Front End",
  foto: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/04/Stephanie-Vaquer_03182025MP_0057_Profile--2e5bb3355d0f40d1b98d983ea9373354.png",
  nombre: "Stephanie Vaquer",
  puesto: "Instructor"
}
])

const[equipos, actualizarEquipos]=useState([
  {
    id: uuidv4(),
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  
  {
    id: uuidv4(),
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuidv4(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuidv4(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuidv4(),
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuidv4(),
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuidv4(),
    titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }
])
  //Podemos cambiar lo que se muestra con if, condicionales de cualquier tipo como ternario, switch...

  //si mostrarFormulario es true, mostrarlo, sino, mostrar lo que deseemos, en este caso un div vacío
  //{mostrarFormulario===true? <Formulario></Formulario>: <div></div>}
  
  const cambiarMostrar=()=>{
    actualizarMostrarFormulario(!mostrarFormulario)
  }

  const registrarColaborador=(colaborador)=>{
    //Spread operator (crear copia de datos actuales y agregar colaborador) ...copia lo que hay en un arreglo
    actualizarColaboradores([...colaboradores, colaborador])

  }


  //Eliminar colaborador
  const eliminarColaborador=(id)=>{
    const nuevosColaboradores=colaboradores.filter((colaborador)=>colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }


  //Actualizar color de equipo
  //Recorre los equipos y del que reciba un cambio de color, se lo actualiza
  const actualizarColorEquipo=(color, titulo, id)=>{
 const equiposActualizados=equipos.map((equipo)=>{
  if(equipo.id===id){
    equipo.colorPrimario=color
  }
  return equipo
 })

 actualizarEquipos(equiposActualizados)
  }

  //Lista de equipos
  
  //enviamos como prop al componente la función cambiarMostrar, que se activa con un botón en MiOrg
  //Enviamos el array equipos a formulario (queriendo que llegue a listaOpciones), 
  // //mapeando para que sea solo titulo
  //Obtenemos los datos de un nuevo colaborador desde formulario, debemos enviarlo a equipo
  return (
    <div>
    <Header>
    </Header>

    {
      mostrarFormulario===true? 
      <Formulario
       equipos={equipos.map((equipo)=>equipo.titulo)}
       registrarColaborador={registrarColaborador}
       ></Formulario>: <></>
       }

    <MiOrg 
    cambiarMostrar={cambiarMostrar}>
    </MiOrg>
    {
      //itera la cantidad de equipos que hay en equipos, se le da un valor único y se manda como props
      //junto al resto de datos
      equipos.map((equipo)=>{
        //utilizamos.filter para mostrar únicamente los que pertenecen al equipo que se enviaron
        return <Equipo 
        key={equipo.id} 
        datos={equipo} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColorEquipo={actualizarColorEquipo}
        ></Equipo>
      })

    }
    <Footer></Footer>


    </div>
  );
}

export default App;
