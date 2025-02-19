import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Portafolio from '../../ui/Portafolio';
import Help from '../../ui/Help';
import SubSecciones from '../../ui/SubSecciones';

import "./conectividad.css"

function ComponenteConectividad() {
    return (
        <>
            <section className="container-fluid p-0 conectividad-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Conectividad para Empresas"
                    texto1 = "Alta velocidad, dedicado, simétrico y seguro con la mejor experiencia del cliente"
                    texto2 = "Las empresas requieren canales de comunicación de alta velocidad, eficientes y seguros, para estar a la altura de los desafíos actuales."
                    form = {true}
                />
            </section>
            <Portafolio 
                subtitulo = "Servicios"
                texto = "Contamos con un portafolio de servicios enfocados en la optimización de las comunicaciones corporativas que impulsaran la transformación digital de tu empresa."
            />
            <section className="container-fluid seccion-sub-servicios" style={{backgroundColor: "#FFFFFF", height: "auto"}}>
                <div className="row m-0 w-100 h-100">
                    <div className="col-md-7 col-12 d-flex justify-content-center align-items-center py-4">
                        <img src={require("../../../images/diseño21.png")} alt="Imagen" className="img-responsive-custom" />
                    </div>
                    <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center py-4">
                        <SubSecciones 
                            titulo="Interconexión de"
                            span="Sedes por Fibra Oscura"
                            texto="Interconecte sus sedes críticas mediante un enlace físicamente dedicado con el máximo estándar de seguridad."
                            direccion="/interconexion/fibra"
                        />
                        <SubSecciones 
                            titulo="Internet dedicado"
                            span="para empresas"
                            texto="Potencie a su empresa con un Internet 100% fibra óptica con simetría 1:1."
                            direccion="/interconexion/empresas"
                        />
                        <SubSecciones 
                            titulo="Interconexión de"
                            span="Sedes por Redes Privadas"
                            texto="Interconecte las sedes de su negocio de manera segura y confiable a través de redes privadas robustas."
                            direccion="/interconexion/redes"
                        />
                        <SubSecciones 
                            titulo="Internet"
                            span="Satelital"
                            texto="Conecta tus equipos y sedes desde cualquier lugar remoto del país."
                            direccion="/interconexion/satelital"
                        />
                    </div>
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteConectividad
