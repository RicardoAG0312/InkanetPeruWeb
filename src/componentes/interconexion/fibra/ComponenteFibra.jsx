import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import "./fibra.css"


function ComponenteFibra() {
    return (
        <>
            <section className="container-fluid p-0 fibra-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Interconexión de Sedes por Fibra Oscura"
                    texto1 = "Conexión a través de un enlace físico dedicado de fibra óptica"
                    texto2 = ""
                    form = {true}
                />
            </section>
        </>
    )
}

export default ComponenteFibra
