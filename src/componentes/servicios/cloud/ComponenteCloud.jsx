import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import DoorDesign from '../../ui/DoorDesign';
import Help from '../../ui/Help';


import "./cloud.css"

function ComponenteCloud() {
    return (
        <>
            <section className="container-fluid p-0 cloud-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Servicios Generales Cloud"
                    texto1 = "Tecnologías 100% OPEX al servicio de su empresa"
                    texto2 = ""
                    form = {true}
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios Cloud"
                texto = "Contamos con servicios altamente especializados en tecnologías cloud que funcionan como catalizadores en la transformación digital de su empresa."
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
                        image="67.png.png" 
                        title="Backup como servicio" 
                        description="Transferencia de datos ilimitada" 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="68.png.png" 
                        title="Infraestructura como servicio" 
                        description="Latencia menor a 10ms."
                        direccion="/contacto" 
                    />
                    <DoorDesign
                        image="69.png.png" 
                        title="Servicio de nube pública" 
                        description="Asesoria constante de optimización de recursos" 
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="70.png.png" 
                        title="Antispam de nube" 
                        description="Protege tu correo de spam y amenazas"
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="71.png.png" 
                        title="Malware Avanzado" 
                        description="Detecta y elimina amenazas digitales"
                        direccion="/contacto"
                    />
                    <DoorDesign
                        image="72.png.png" 
                        title="Ethical Hacking" 
                        description="Encuentra vulnerabilidades antes que los hackers"
                        direccion="/contacto"
                    />
                </div>
            </section>
            <Help />
        </>
        
        
    )
}

export default ComponenteCloud
