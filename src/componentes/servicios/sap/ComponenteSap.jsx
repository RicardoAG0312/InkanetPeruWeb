import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./sap.css"
import Help from '../../ui/Help';


function ComponenteSap() {
    return (
        <>
            <section className="container-fluid p-0 sap-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Servicios Generales SAP"
                    texto1 = "Tecnologías 100% OPEX al servicio de su empresaa"
                    texto2 = ""
                />
            </section>
            <Help />
        </>

    )
}

export default ComponenteSap
