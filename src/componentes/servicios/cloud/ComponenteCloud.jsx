import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
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
            <Help />
        </>
        
        
    )
}

export default ComponenteCloud
