import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import Help from '../../ui/Help';

import "./conectividad.css"

function ComponenteConectividad() {
    return (
        <>
            <section className="container-fluid p-0 conectividad-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Conectividad para Empresas"
                    texto1 = "Alta velocidad, dedicado, simétrico y seguro con la mejor experiencia del cliente"
                    texto2 = "Las empresas requieren canales de comunicación de alta velocidad, eficientes y seguros, para estar a la altura de los desafíos actuales."
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios"
                texto = "Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas que impulsaran la transformación digital de tu empresa."
            />
            <Help />
        </>
    )
}

export default ComponenteConectividad
