import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./gestionados.css"
import Help from '../../ui/Help';


function ComponenteGestionados() {
    return (
        <>
            <section className="container-fluid p-0 gestionados-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Servicios Gestionados"
                    texto1 = "Convierta CAPEX en OPEX con nuestros servicios gestionados"
                    texto2 = "Invertir capital en servicios en lugar de equipos que se deprecian con el tiempo, ayuda a las empresas a sobrellevar la carga que significa comprar hardware y licencias de software."
                />
            </section>
            <Help />
        </>

    )
}

export default ComponenteGestionados
