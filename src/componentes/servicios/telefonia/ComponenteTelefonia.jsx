import React from 'react'
import { ComponenteBarraNavegacion } from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import DoorDesign from '../../ui/DoorDesign';
import Help from '../../ui/Help';


import "./telefonia.css"

function ComponenteTelefonia() {
    return (
        <>
            <section className="container-fluid p-0 telefonia-section">
                <ComponenteBarraNavegacion />
                <HeaderForm
                    titulo="Telefonía Corporativa"
                    texto1="Ahorro, alta disponibilidad,calidad y seguridad en una red dedicada"
                    texto2="Las empresas modernas necesitan canales de comunicación eficientes y seguros donde contactar con clientes, proveedores y colaboradores para estar a la altura de los desafíos actuales."
                    form={true}
                />
            </section>
            <Portafolio
                subtitulo="Servicios"
                texto="Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas."
            />
            <section className="container">
                <div className="row  mt-5 mb-5 flex-nowrap overflow-auto seccion-puerta"
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
                        image="50.png.png"
                        title="Colaboración y videoconferencia"
                        description="Salones privados de audio y videoconferencia. Calidad HD de video y audio."
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="51.png.png"
                        title="Centrales virtuales"
                        description="Mejora las comunicaciones de tu empresa con una red robusta dedicada solo para VoIP."
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="52.png.png"
                        title="SIP Trunk Corporativo"
                        description="Brindamos líneas troncales (Sip Trunks) a la medida de las empresas mediante enlaces."
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="53.png.png"
                        title="SIP Trunk Call Center"
                        description="Brindamos líneas troncales optimizadas para empresas con Call Center de alta demanda."
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="54.png.png"
                        title="Equipamiento Telfónico IP-PBX"
                        description="Contamos con Centrales telefónicos y terminales telefónicas"
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="55.png.png"
                        title="Contact Center en la Nube"
                        description="Solución de reportes avanzadas para centrales físicas."
                        direccion="/contacto"
                    />
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteTelefonia
