import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import CartasNumeros from '../../ui/CartasNumeros';
import Informacion from '../../ui/Informacion';
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
            <section className='text-black container-fluid p-5 h-auto bg-white'> 
                <Informacion 
                    titulo1 = "¿Qué es la"
                    span1 = "Internet para empresas?"
                    texto1 = "Es un servicio de Internet con conexión dedicada y overbooking 1:1 que se brinda a través de un enlace por medio de fibra óptica, desde el nodo de acceso más cercano hasta las oficinas del cliente. Permite una navegación estable y el acceso a distintas aplicaciones en la nube pública."
                    texto2 = ""
                    titulo2 = "Ventajas"
                    span2 = "Competitivas"
                    texto3 = "Contar con un Internet creado para satisfacer las necesidades del sector corporativo es una ventaja altamente competitiva."
                    texto4 = "Una red de alta velocidad le permitirá a su empresa comunicarse con mayor eficiencia y velocidad mediante un SLA adaptado a las necesidades de la empresa."
                />
            </section>
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#3A4040", height: "auto"}}>
                <h1 className='fw-bold ms-4'> BENEFICIOS </h1>
                <div className="container">
                    <div className="row">
                        <Cartas 
                            imagen = "92.png"
                            texto = "Conexión privada y exclusiva."
                        />
                        <Cartas 
                            imagen = "84.png"
                            texto = "Soporte técnico 24x7"
                        />
                        <Cartas 
                            imagen = "93.png"
                            texto = "Ancho de banda virtualmente ilimitado."
                        />
                        <Cartas 
                            imagen = "85.png"
                            texto = "Ancho de banda 100% garantizado"
                        />
                        <Cartas 
                            imagen = "94.png"
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
