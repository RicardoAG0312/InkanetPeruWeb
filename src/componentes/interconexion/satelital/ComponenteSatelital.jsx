import React from 'react'
import HeaderForm from '../../ui/HeaderForm';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import DoorDesign from '../../ui/DoorDesign';
import TY from "../../../images/TY.png.png";
import "./satelital.css"

function ComponenteSatelital() {
    return (
        <>
            <section className="container-fluid p-0 satelital-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Internet Satelital de Baja Órbita"
                    texto1 = "Conecta tus equipos y sedes desde cualquier lugar remoto del país"
                    texto2 = ""
                    form = {true}
                />
            </section>
            <section className="container-fluid p-5" style={{backgroundColor: "#3A4040"}}>
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h1 style={{fontSize: "50px"}}><span style={{fontWeight: "bold", color:"#FFFFFF"}}>CON EL SERVICIO DE INTERNET SATELITAL</span> <span style={{fontWeight: "bold", color: "#1EB3AF"}}>DE BAJA ÓRBITA DE INKANET</span></h1>
                        <p style={{marginLeft: "-10px", marginTop: "20px", fontSize: "20px"}} className='text-light'>
                        Podrás conectar tus equipos y sedes desde cualquier lugar remoto del país a alta velocidad, donde no se cuenta con un acceso convencional a Internet e impulsa el crecimiento de tu empresa.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex align-item-center justify-content-center p-5">
                        <img src={TY} alt="Descripción de la imagen" className="img-fluid" style={{width:"", height:"400px"}}/>
                    </div>
                </div>
            </section>
            <section className="container-fluid">
                <div className="text-center mt-3">
                    <h1 style={{fontSize: "50px", fontWeight: "bold", color:"#05AEAF"}}>BENEFICIOS</h1>
                </div>
                <div className="row justify-content-center mt-5 mb-5 seccion-puerta-satel">
                    <DoorDesign
                        image="103.png" 
                        title="Conexión sin límites" 
                        description="No importa cuán remota sea tu operación nuestro Internet Satelital de Baja Órbita ofrece una comunicación ininterrumpido y estable" 
                        boton = "none"
                    />
                    <DoorDesign
                        image="104.png" 
                        title={<span className='titulo-custom'>Baja<br/>Latencia</span>} 
                        description="Accede a una cobertura segura y confiable con una latencia de entre 40 y 70 ms que permite una conectividad de alto rendimiento"
                        boton = "none"
                    />
                    <DoorDesign
                        image="105.png" 
                        title="Velocidad Excepcional" 
                        description="Ancho de banda superior con velocidades de descarga de hasta 250 Mbps para mantener tus operaciones sin interrupciones"
                        boton = "none"
                    />
                    <DoorDesign
                        image="106.png" 
                        title="Comunicación Constante" 
                        description="Transferencia de datos entre las sedes de tu empresa ubicadas en zonas poco accesibles, a través de enlaces asimétricos satelitales"
                        boton = "none"
                    />
                </div>
            </section>
        </>
    )
}

export default ComponenteSatelital
