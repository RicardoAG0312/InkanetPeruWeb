import React from 'react'
import { BiCheckDouble } from "react-icons/bi";

function ViñetasSomos({ texto }) {
    return (
        <div className="d-flex align-items-center justify-content-start" style={{
            border: "1px solid #1FB3AE", 
            height: "80px", 
            borderRadius: "50px", 
            gap: "20px", 
            padding: "10px", 
            width: "100%",
            maxWidth: "100%"
        }}>
            <div style={{
                color: "white",
                backgroundColor: "#1FB3AE",
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
            <p className="m-0 text-white" style={{ fontSize: ".8rem", maxWidth: "90%" }}>{texto}</p>
        </div>
    );
}

export default ViñetasSomos
