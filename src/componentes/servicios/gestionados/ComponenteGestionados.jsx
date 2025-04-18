import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./gestionados.css"
import Help from '../../ui/Help';
import SubSecciones from '../../ui/SubSecciones';
import Tres from "../../../images/tres.png";
import AnimatedSection from '../../AnimatedSection';

function ComponenteGestionados() {
    return (
        <>
            <section className="container-fluid p-0 gestionados-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "Servicios Gestionados"
                    texto1 = "Convierta CAPEX en OPEX con nuestros servicios gestionados"
                    texto2 = "Invertir capital en servicios en lugar de equipos que se deprecian con el tiempo, ayuda a las empresas a sobrellevar la carga que significa comprar hardware y licencias de software."
                    form = {true}
                />
            </section>
            <section className="container-fluid seccion-sub-servicios" style={{backgroundColor: "#FFFFFF", height: "auto"}}>
                <div className="row m-0 w-100 h-100">
                    <AnimatedSection as="div" direction="top" className="col-md-7 col-12 d-flex justify-content-center align-items-center py-4">
                        <img src={Tres} alt="Imagen" className="img-fluid" />
                    </AnimatedSection>
                    <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center py-4">
                        <SubSecciones 
                            titulo="LAN"
                            span="Gestionada"
                            texto="Aseguramos la continuidad de tu negocio gestionando los equipos de tu red local."
                            direccion="/contacto"
                        />
                        <SubSecciones 
                            titulo="WIFI"
                            span="Gestionado"
                            texto="Renovamos y administramos los equipos de acceso inalámbrico en su empresa."
                            direccion="/contacto"
                        />
                        <SubSecciones 
                            titulo="Cámaras de Videovigilancia"
                            span="Gestionadas"
                            texto="Proyectos y gestión de cámaras de seguridad y video wall."
                            direccion="/contacto"
                        />
                    </div>
                </div>
            </section>
            <Help />
        </>

    )
}

export default ComponenteGestionados
