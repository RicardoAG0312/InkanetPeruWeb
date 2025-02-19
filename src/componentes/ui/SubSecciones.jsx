import React from 'react'
import BotonAnimado from './BotonAnimado'

function SubSecciones({titulo, span, texto, nav}) {
    return (
        <div className="container text-center text-md-start mb-3 texto-ajustado">
            <h1 className="fw-bold" style={{ fontSize: "28px", maxWidth: "70%" }}>
                {titulo} <span>{span}</span>
            </h1>
            <p className="text-black w-100 w-md-50">{texto}</p>
            
            <BotonAnimado 
                colorIconoBase="black"
                colorLetraBase="black"
                colorBordeBase="black"
                colorIconoPress="#05AFA5"
                fondoTextoPress="black"
                colorLetraPress="white"
                nav={nav}
            />
        </div>
    )
}

export default SubSecciones
