import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
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
                    titulo = "Telefonía Corporativa"
                    texto1 = "Ahorro, alta disponibilidad,calidad y seguridad en una red dedicada"
                    texto2 = "Las empresas modernas necesitan canales de comunicación eficientes y seguros donde contactar con clientes, proveedores y colaboradores para estar a la altura de los desafíos actuales."
                    form = {true}
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios"
                texto = "Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas."
            />
            <section className="container">
                <div className="row justify-content-center mt-5 mb-5 seccion-puerta">
                    <DoorDesign
                        image="50.png" 
                        title="Colaboración y videoconferencia" 
                        description="Salones privados de audio y videoconferencia. Calidad HD de video y audio." 
                    />
                    <DoorDesign
                        image="51.png" 
                        title="Centrales virtuales" 
                        description="Mejora las comunicaciones de tu empresa con una red robusta dedicada solo para VoIP." 
                    />
                    <DoorDesign
                        image="52.png" 
                        title="SIP Trunk Corporativo" 
                        description="Brindamos líneas troncales (Sip Trunks) a la medida de las empresas mediante enlaces." 
                    />
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteTelefonia
