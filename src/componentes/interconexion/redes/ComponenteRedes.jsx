import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import "./redes.css"


function ComponenteRedes() {
    return (
        <>
            <section className="container-fluid p-0 redes-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Interconexión de Sedes por Redes Privadas"
                    texto1 = "Interconecte sus sucursales con enlaces dedicados privados 100% fibra óptica."
                    texto2 = ""
                    form = {true}
                />
            </section>
        </>
    )
}

export default ComponenteRedes
