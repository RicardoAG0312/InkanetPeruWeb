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
                        // scrollbarWidth: "none", // Oculta en Firefox
                        paddingBottom: "10px",
                        overflowX: "scroll", // Asegura que el scroll funcione
                        // msOverflowStyle: "none" // Oculta scrollbar en IE y Edge
                    }}
                >
                    <DoorDesign
                        image="56.png.png" 
                        title="Internet Seguro Enterprise" 
                        description="Velocidad, estabilidad y seguridad de clase mundial para su empresa." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="57.png.png" 
                        title="Análisis de Vulnerabilidades" 
                        description="El componente de seguridad que te permite obtener doble validación de la seguridad de tu red." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="58.png.png" 
                        title="Secure SD-WAN" 
                        description="Usa de manera óptima y segura sus enlaces de Internet empresarial." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="59.png.png" 
                        title="Internet Seguro" 
                        description="Velocidad, seguridad y estabilidad en una sola red." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="60.png.png" 
                        title="Internet Seguro Avanzado" 
                        description="Conectividad, seguridad, productividad y visibilidad en una sola red." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="61.png.png" 
                        title="WAF Seguro" 
                        description="Proteje las aplicaciones web de manera integral." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="62.png.png" 
                        title="Cliente Seguro" 
                        description="Protección centralizada para endpoints." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="63.png.png" 
                        title="EDR Cloud" 
                        description="Protección avanzada para dispositivos finales." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="109.png.png" 
                        title="Sandboxing Cloud" 
                        description="Protección avanzada contra ataques sofisticados." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="65.png.png" 
                        title="Correo Seguro" 
                        description="Protección avanzada para correos corporativos." 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="66.png.png" 
                        title="Protección Anti DDos" 
                        description="Protección para su empresa contra ataques volúmetricos." 
                        direccion="/contacto"
                    />
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteSeguridad
