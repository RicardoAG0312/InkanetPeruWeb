import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import CartasNumeros from '../../ui/CartasNumeros';
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
            {/* <section className='text-black container-fluid p-5 h-auto bg-white'> 
                hola
            </section> */}
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#3A4040", height: "auto"}}>
                <h1 className='fw-bold ms-4'> BENEFICIOS </h1>
                <div className="container">
                    <div className="row">
                        <Cartas 
                            imagen = "83"
                            texto = "Conexión privada y exclusiva."
                        />
                        <Cartas 
                            imagen = "84"
                            texto = "Soporte técnico 24x7"
                        />
                        <Cartas 
                            imagen = "85"
                            texto = "Ancho de banda virtualmente ilimitado."
                        />
                        <Cartas 
                            imagen = "86"
                            texto = "100% OPEX"
                        />
                    </div>
                </div>
            </section>
            <section className='text-white container-fluid p-5' style={{backgroundColor: "#191919", height: "auto"}}>
                <div className="container">
                    <div className="row ">
                        <CartasNumeros 
                            numero = "01"
                            texto = "Simetría 1:1."
                        />
                        <CartasNumeros 
                            numero = "02"
                            texto = "Hilos de fibra óptica dedicados para el cliente."
                        />
                        <CartasNumeros 
                            numero = "03"
                            texto = "No se usa multiplexación."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteFibra
