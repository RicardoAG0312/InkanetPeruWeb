import React from 'react'
import BotonAnimado from './BotonAnimado'
import AnimatedSection from '../AnimatedSection'

function SubSecciones({ titulo, span, texto, direccion }) {
    return (
        <AnimatedSection as="div" direction="right" className="container text-center text-md-start mb-3 texto-ajustado">
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
                nav={direccion}
            />
        </AnimatedSection>
    )
}

export default SubSecciones
