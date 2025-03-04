import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import CartasNumeros from '../../ui/CartasNumeros';
import Informacion from '../../ui/Informacion';
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
            <section className='text-black container-fluid p-5 h-auto bg-white'> 
                <Informacion 
                    titulo1 = "¿Qué es la"
                    span1 = "Interconexión de Sedes por Redes Privadas?"
                    texto1 = "El servicio de interconexión de sedes del cliente se brinda a través de enlaces dedicados de fibra óptica desde el nodo de acceso de la red Backbone de Inkanet hasta las sedes del cliente.Permite la transferencia de información entre las sucursales sin discriminar el tipo de aplicaciones, útiles para el acceso rápido a servicios ubicados en las sedes principales, centralizar la salida a Internet y compartir otros recursos de red perimetral."
                    texto2 = ""
                    titulo2 = "¿Cómo contribuye este servicio con la "
                    span2 = "continuidad de operaciones de tu empresa?"
                    texto3 = "Las empresas actuales requieren eliminar las distancias geográficas entre su sede principal y sus sucursales debido a la necesidad de compartir información en tiempo real de una manera segura."
                    texto4 = "Estas interconexiones se pueden brindar a través de la red de Inkanet, dedicada 100% a tráfico corporativo de altas velocidades."
                />
            </section>
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#3A4040", height: "auto"}}>
                <h1 className='fw-bold ms-4'> BENEFICIOS </h1>
                <div className="container">
                    <div className="row">
                        <Cartas 
                            imagen = "99.png"
                            texto = "Permite centralizar el acceso y la gestión de Internet desde un solo punto"
                        />
                        <Cartas 
                            imagen = "84.png"
                            texto = "Soporte técnico 24x7"
                        />
                        <Cartas 
                            imagen = "93.png"
                            texto = "Enlaces vía Fibra Óptica"
                        />
                        <Cartas 
                            imagen = "85.png"
                            texto = "Ancho de banda 100% garantizado"
                        />
                        <Cartas 
                            imagen = "94.png"
                            texto = "Conexión Simétrica"
                        />
                        <Cartas 
                            imagen = "100.png"
                            texto = "Permite integrar las sucursales de una empresa"
                        />
                        <Cartas 
                            imagen = "101.png"
                            texto = "Permite compartir múltiples recursos IP (Telefonía, cámaras, sistemas de información, etc)"
                        />
                    </div>
                </div>
            </section>
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#191919", height: "auto"}}>
                <div className="container">
                    <div className="row ">
                        <CartasNumeros 
                            numero = "01"
                            texto = "Línea dedicada sobre un backbone de fibra óptica 100% propia."
                        />
                        <CartasNumeros 
                            numero = "02"
                            texto = "Red de Transporte conformada por anillos de fibra óptica."
                        />
                        <CartasNumeros 
                            numero = "03"
                            texto = "Despliegue sobre una moderna red MPLS."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteRedes
