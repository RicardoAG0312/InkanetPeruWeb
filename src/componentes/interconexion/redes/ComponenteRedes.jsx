import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import CartasNumeros from '../../ui/CartasNumeros';
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
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#3A4040", height: "auto"}}>
                <h1 className='fw-bold ms-4'> BENEFICIOS </h1>
                <div className="container">
                    <div className="row">
                        <Cartas 
                            imagen = "99"
                            texto = "Permite centralizar el acceso y la gestión de Internet desde un solo punto"
                        />
                        <Cartas 
                            imagen = "84"
                            texto = "Soporte técnico 24x7"
                        />
                        <Cartas 
                            imagen = "93"
                            texto = "Enlaces vía Fibra Óptica"
                        />
                        <Cartas 
                            imagen = "85"
                            texto = "Ancho de banda 100% garantizado"
                        />
                        <Cartas 
                            imagen = "94"
                            texto = "Conexión Simétrica"
                        />
                        <Cartas 
                            imagen = "100"
                            texto = "Permite integrar las sucursales de una empresa"
                        />
                        <Cartas 
                            imagen = "101"
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
