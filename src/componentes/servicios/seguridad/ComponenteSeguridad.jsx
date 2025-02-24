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
                <div className="row mt-5 mb-5 flex-nowrap overflow-auto seccion-puerta-seg"
                    style={{
                        scrollSnapType: "x mandatory",
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "thin",
                        paddingBottom: "10px"
                    }}
                >
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
                    <DoorDesign
                        image="59.png" 
                        title="Internet Seguro" 
                        description="Velocidad, seguridad y estabilidad en una sola red." 
                    />
                    <DoorDesign
                        image="60.png" 
                        title="Internet Seguro Avanzado" 
                        description="Conectividad, seguridad, productividad y visibilidad en una sola red." 
                    />
                    <DoorDesign
                        image="61.png" 
                        title="WAF Seguro" 
                        description="Proteje las aplicaciones web de manera integral." 
                    />
                    <DoorDesign
                        image="62.png" 
                        title="Cliente Seguro" 
                        description="Protección centralizada para endpoints." 
                    />
                    <DoorDesign
                        image="63.png" 
                        title="EDR Cloud" 
                        description="Protección avanzada para dispositivos finales." 
                    />
                    <DoorDesign
                        image="64.png" 
                        title="Sandboxing Cloud" 
                        description="Protección avanzada contra ataques sofisticados." 
                    />
                    <DoorDesign
                        image="65.png" 
                        title="Correo Seguro" 
                        description="Protección avanzada para correos corporativos." 
                    />
                    <DoorDesign
                        image="66.png" 
                        title="Protección Anti DDos" 
                        description="Protección para su empresa contra ataques volúmetricos." 
                    />
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteSeguridad
