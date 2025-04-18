import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import AnimatedSection from '../AnimatedSection';

function ViñetasSomos({ texto, fondo, fondoIcono, colorIcono, colorLetra }) {
    return (
        <AnimatedSection as="div" direction="left" className="viñetas-somos d-flex align-items-center justify-content-start" style={{
            border: "1px solid #1FB3AE", 
            height: "80px", 
            borderRadius: "50px", 
            gap: "20px", 
            padding: "10px", 
            width: "500px",
            maxWidth: "100%",
            backgroundColor: fondo
        }}>
            <div style={{
                color: colorIcono,
                backgroundColor: fondoIcono,
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                fontSize: "30px",  // Ajusté el tamaño para pantallas pequeñas
                justifyContent: "center"
            }}>
                <BiCheckDouble />
            </div>
            <p className={`m-0 text-${colorLetra}`} style={{ fontSize: "1rem", maxWidth: "80%" }}>
                {texto}
            </p>
        </AnimatedSection>
    );
}

export default ViñetasSomos
