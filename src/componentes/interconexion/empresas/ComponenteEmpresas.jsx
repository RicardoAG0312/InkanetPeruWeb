import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import CartasNumeros from '../../ui/CartasNumeros';
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
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#3A4040", height: "auto"}}>
                <h1 className='fw-bold ms-4'> BENEFICIOS </h1>
                <div className="container">
                    <div className="row">
                        <Cartas 
                            imagen = "92"
                            texto = "Conexión privada y exclusiva."
                        />
                        <Cartas 
                            imagen = "84"
                            texto = "Soporte técnico 24x7"
                        />
                        <Cartas 
                            imagen = "93"
                            texto = "Ancho de banda virtualmente ilimitado."
                        />
                        <Cartas 
                            imagen = "85"
                            texto = "Ancho de banda 100% garantizado"
                        />
                        <Cartas 
                            imagen = "94"
                            texto = "Conexión Simétrica"
                        />
                    </div>
                </div>
            </section>
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#191919", height: "auto"}}>
                <div className="container">
                    <div className="row ">
                        <CartasNumeros 
                            numero = "01"
                            texto = "Enlaces redundantes y de gran capacidad para salidas internacionales."
                        />
                        <CartasNumeros 
                            numero = "02"
                            texto = "Protección contra ataques volumétricos de denegación de servicio (DDoS)."
                        />
                        <CartasNumeros 
                            numero = "03"
                            texto = "Centro de Datos redundados. Servidores CDN y acceso a aplicaciones en la nube."
                        />
                        <CartasNumeros 
                            numero = "04"
                            texto = "Seguridad en el backbone: Fácil integración con productos adicionales de Seguridad."
                        />
                        <CartasNumeros 
                            numero = "05"
                            texto = "Red de Transporte conformada por anillos de fibra óptica."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteEmpresas
