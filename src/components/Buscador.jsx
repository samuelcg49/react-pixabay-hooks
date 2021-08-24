import React from 'react'
import { useState } from 'react'

function Buscador(props) {

    const [busqueda, setBusqueda] = useState("")

    const HandleChange = e =>{
        e.preventDefault()

        setBusqueda(e.target.value)
    }

    const HandleData = (e) =>{
        e.preventDefault()
        
        props.datosBusqueda(busqueda)
        
    }

    return (
        <div>
            <form onSubmit={HandleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input onChange={HandleChange} type="text" className="form-control form-control-lg" placeholder="Busca tu imágen. Ejemplo: Fútbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Buscador
