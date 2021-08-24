import React from 'react'
import Paginacion from './Paginacion'
import Imagen from './Imagen'

function Resultado(props) {
    
    const imagenes = props.imagenes

    if(imagenes.length === 0) return null


    return (
        <React.Fragment>
            <div className="col-12 p-5 row">
                {imagenes.map(item =>(
                    <Imagen key={item.id} imagen={item} />
                ))}
            </div>
            <Paginacion 
                paginaAnterior={props.paginaAnterior}
                paginaSiguiente={props.paginaSiguiente}
            />
        </React.Fragment>
    )
}
    
export default Resultado