import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import "./satelital.css"

function ComponenteSatelital() {
    return (
        <>
            <section className="container-fluid p-0 satelital-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Internet Satelital de Baja Órbita"
                    texto1 = "Conecta tus equipos y sedes desde cualquier lugar remoto del país"
                    texto2 = ""
                    form = {true}
                />
            </section>
        </>
    )
}

export default ComponenteSatelital
