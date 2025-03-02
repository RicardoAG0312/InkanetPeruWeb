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
                        scrollbarWidth: "thin",
                        paddingBottom: "10px"
                    }}
                >
                    <DoorDesign
                        image="67.png" 
                        title="Backup como servicio" 
                        description="Transferencia de datos ilimitada" 
                    />
                    <DoorDesign
                        image="68.png" 
                        title="Infraestructura como servicio" 
                        description="Latencia menor a 10ms." 
                    />
                    <DoorDesign
                        image="69.png" 
                        title="Servicio de nube pública" 
                        description="Asesoria constante de optimización de recursos" 
                    />
                    <DoorDesign
                        image="70.png" 
                        title="Antispam de nube" 
                        description="Mas información"
                    />
                    <DoorDesign
                        image="71.png" 
                        title="Análisis de Malware Avanzado" 
                        description="Mas información"
                    />
                    <DoorDesign
                        image="72.png" 
                        title="Ethical Hacking" 
                        description="Mas información"
                    />
                </div>
            </section>
            <Help />
        </>
        
        
    )
}

export default ComponenteCloud
