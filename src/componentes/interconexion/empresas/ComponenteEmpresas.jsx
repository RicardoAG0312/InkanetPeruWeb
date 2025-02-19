import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import "./empresas.css"

function ComponenteEmpresas() {
    return (
        <>
            <section className="container-fluid p-0 empresas-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Internet para Empresas"
                    texto1 = "Internet Dedicado 100% fibra óptica para empresas"
                    texto2 = ""
                    form = {true}
                />
            </section>
        </>
    )
}

export default ComponenteEmpresas
