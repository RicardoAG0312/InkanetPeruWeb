import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import DoorDesign from '../../ui/DoorDesign';
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
                    form = {true}
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios"
                texto = "Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas."
            />
            <section className="container">
                <div className="row justify-content-center mt-5 mb-5 seccion-puerta-seg">
                    <DoorDesign
                        image="56.png" 
                        title="Internet Seguro Enterprise" 
                        description="Velocidad, estabilidad y seguridad de clase mundial para su empresa." 
                    />
                    <DoorDesign
                        image="57.png" 
                        title="Análisis de Vulnerabilidades" 
                        description="El componente de seguridad que te permite obtener doble validación de la seguridad de tu red." 
                    />
                    <DoorDesign
                        image="58.png" 
                        title="Secure SD-WAN" 
                        description="Usa de manera óptima y segura sus enlaces de Internet empresarial." 
                    />
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteSeguridad
