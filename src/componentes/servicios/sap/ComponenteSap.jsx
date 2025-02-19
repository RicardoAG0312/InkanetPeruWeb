import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./sap.css"
import Help from '../../ui/Help';
import ServiciosSAP from '../../ui/ServiciosSAP';


function ComponenteSap() {
    return (
        <>
            <section className="container-fluid p-0 sap-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = "sap.png"
                    titulo = ""
                    texto1 = "Tecnologías 100% OPEX al servicio de su empresaa"
                    texto2 = ""
                />
            </section>
            <section className="bg-white py-5">
                <div className="row m-0 p-0">
                    <div className="col-md-6 col-12 p-5 d-flex align-content-center justify-content-center flex-column">
                        <h1 className="fw-bold"> 
                            Nuestros Servicios de SAP incluyen la provisión de la 
                            <span className="fw-bold" style={{color: "#09AEAF"}}> Infraestructura en nuestra Nube Privada o en las Nubes Públicas. </span>
                        </h1>
                        <p className="text-black mt-4">
                            Los servicios de SAP comprenden desde Business One a S/4 HANA brindando soporte especializado enfocado en proyectos especializados y operaciones. 
                            Modernice a una infraestructura Certificada SAP HANA con nuestros servicios SAP, el cual incluye soporte especializado en un esquema 24 x 7 enfocado en 
                            optimizar y mantener la disponibilidad de sus servicios SAP.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 p-5 d-flex align-items-center justify-content-center">
                        <img src={require("../../../images/38.png")} alt="Imagen" className="img-responsive-customm"/>
                    </div>
                    <div className="col-md-6 col-12 p-5">
                    </div>
                    <div className="col-md-6 col-12 p-5">
                        <h1 className="fw-bold"> Proyectos </h1>
                        <p> Se gestionan con un assessment personalizado a los desafíos del negocio, analizando alternativas en forma conjunta que ayuden a cumplir con los requerimientos de su negocio. Para ello se despliegan nuestros servicios de consultoría para la ejecución de un assessment en el uso funcional, seguridad, actualización, tuning de los sistemas SAP.</p>
                        <p> La línea de operaciones administra la gestión de incidentes y requerimientos con una línea base. Los servicios incluyen gestión de alertas, parchado, cambio de parámetros y afinamiento basado en análisis y buenas prácticas de SAP.</p>
                    </div>
                </div>
            </section>
            <section className="py-5" style={{ backgroundColor: "#3A4040" }}>
                <h1 className="text-center text-white mb-5">
                    Portafolio de <span style={{ color: "#09AEAF" }}> Servicios </span>
                </h1>
                <div className="row p-0 m-0">
                    <div className="col-md-6 col-12 px-5 pe-0">
                        <ServiciosSAP 
                            img="75"
                            titulo="Actividades"
                            texto="Operaciones y monitoreo de instalación"
                            fondo="#09AEAF"
                            fondoIcono="white"
                            colorIcono="black"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="Administración de Transporte"
                            fondo="#09AEAF"
                            fondoIcono="white"
                            colorIcono="black"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="Gestión de Seguridad"
                            fondo="#09AEAF"
                            fondoIcono="white"
                            colorIcono="black"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="Administración y soporte SAP BASIS"
                            fondo="#09AEAF"
                            fondoIcono="white"
                            colorIcono="black"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="Administración y monitoreo de Base de datos"
                            fondo="#09AEAF"
                            fondoIcono="white"
                            colorIcono="black"
                            colorLetra="black"
                        />
                    </div>
                    <div className="col-md-6 col-12 px-5 ps-0">
                        <ServiciosSAP 
                            img="76"
                            titulo="Servicios adaptados al cliente"
                            texto="SAP-OPE"
                            fondo="#09AEAF"
                            fondoIcono="black"
                            colorIcono="white"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="SAP-ADM"
                            fondo="#09AEAF"
                            fondoIcono="black"
                            colorIcono="white"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="SAP-SEG"
                            fondo="#09AEAF"
                            fondoIcono="black"
                            colorIcono="white"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="SAP-ADM-BASIS"
                            fondo="#09AEAF"
                            fondoIcono="black"
                            colorIcono="white"
                            colorLetra="black"
                        />
                        <ServiciosSAP 
                            texto="SAP-HANA-DBA"
                            fondo="#09AEAF"
                            fondoIcono="black"
                            colorIcono="white"
                            colorLetra="black"
                        />
                    </div>
                </div>
            </section>
            <section className="py-0" style={{ backgroundColor: "#1A1A1A" }}>
                <div className="row m-0 p-0">
                    <div className="text-img-sap1 text-center col-md-6 col-12 px-4 py-5 d-flex align-items-center justify-content-center flex-column">
                        <h1 className="fw-bold text-white w-75 w-md-80" style={{ zIndex: "2" }}> 
                            Dentro de estos 
                            <span className="fw-bold" style={{ color: "#09AEAF" }}> Servicios se incluyen </span>
                        </h1>
                    </div>
                    <div className="text-img-sap2 col-md-6 text-center col-12 px-4 py-5 d-flex align-items-center justify-content-center">
                        <h1 className="fw-bold text-white w-75 w-md-80" style={{ zIndex: "2" }}> 
                            Proyectos sobre 
                            <span className="fw-bold" style={{ color: "#09AEAF" }}> Soluciones SAP </span>
                        </h1>
                    </div>
                    <div className="col-md-6 col-12 px-4 py-5 text-white">
                        <p> Atención de incidencias 24x7 en sistemas SAP, análisis de performance, informe mensual de sistema SAP, ejecución de acciones correctivas según calendario de soporte SAP, requerimiento de informes de auditoría, monitoreo avanzado con SAP system monitoring. </p>
                    </div>
                    <div className="col-md-6 col-12 px-4 py-5 text-white">
                        <p> Copias homogéneas, copias heterogéneas, optimización de recursos y capacidades, instalación y configuración básica de productos SAP, actualización de Support Packages y parches de BD, entre otros.</p>
                    </div>
                </div>
            </section>
            <Help />
        </>

    )
}

export default ComponenteSap
