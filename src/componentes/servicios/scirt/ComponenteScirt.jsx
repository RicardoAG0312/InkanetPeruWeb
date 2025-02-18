import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./scirt.css"
import Help from '../../ui/Help';



function ComponenteScirt() {
    return (
        <>
            <section className="container-fluid p-0 scirt-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "INKANET CSIRT"
                    texto1 = "Somos miembros acreditados de FIRST para brindar soluciones efectivas y oportunas a tus incidentes de ciberseguridad."
                    texto2 = ""
                />
            </section>
            <Help />
        </>
    )
}

export default ComponenteScirt
