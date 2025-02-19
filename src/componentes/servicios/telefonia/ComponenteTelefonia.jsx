import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
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
            <Help />
        </>
    )
}

export default ComponenteTelefonia
