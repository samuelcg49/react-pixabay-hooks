
import React, { useState } from 'react';
import { useEffect } from 'react'; 
import axios from 'axios'; 

import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

function App() {

  const [termino, setTermino] = useState("")
  const [imagenes, setImagenes] = useState([])
  const [pagina, setPagina] = useState(1)
  
  const url = `https://pixabay.com/api/?key=21147682-2abe604e5d63e1236f3b4b292&q=${termino}&per_page=30&page=${pagina}`

  const scroll = () =>{
    const elemento = document.querySelector(".jumbotron")
    elemento.scrollIntoView("smooth","start")
  }

  const paginaAnterior = () =>{
    
    let paginaAterior = pagina

    if(paginaAterior === 1 ){
      return null
    }else{
      setPagina(paginaAterior - 1)
    }

  }

  const paginaSiguiente = () => {
    let paginaSiguiente = pagina

    setPagina(paginaSiguiente + 1)

  }

  //Hook para renderizar el contenido cada vez que cambia la página o el termino de búsqueda
  useEffect(() => { 
    consultarApi()
    scroll()

  }, [pagina, termino])  

  const consultarApi = async() => {
      await axios.get(url)
              .then(result => setImagenes(result.data.hits))
              .catch(err => console.log(err)) 
  }

  const datosBusqueda = (termino) => {
    setTermino(termino)
    setPagina(1) //Cada vez que se realiza una busqueda se setea la página a 1
  }

  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Buscador datosBusqueda={datosBusqueda}/>
      </div>
      <div className="row justify-content-center">
        <Resultado 
            imagenes={imagenes}
            paginaAnterior={paginaAnterior}
            paginaSiguiente={paginaSiguiente}
        />

      </div>
    </div>
  );
}

export default App;
