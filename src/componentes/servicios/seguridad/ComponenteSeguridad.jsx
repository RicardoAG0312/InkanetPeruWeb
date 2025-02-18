import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import Help from '../../ui/Help';
import "./seguridad.css"

function ComponenteSeguridad() {
    return (
        <>
            <section className="container-fluid p-0 seguridad-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Ciberseguridad para empresas"
                    texto1 = "La seguridad de la información es un deber de las empresas"
                    texto2 = "Las amenazas informáticas actuales son cada vez más sofisticadas y peligrosas al punto que pueden atentar contra la continuidad del negocio sino estamos preparados."
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios"
                texto = "Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas."
            />
            <Help />
        </>
    )
}

export default ComponenteSeguridad
