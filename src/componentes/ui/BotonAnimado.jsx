import React from 'react'
import { useNavigate } from "react-router-dom";

function BotonAnimado({colorIconoBase, colorLetraBase, colorBordeBase, colorIconoPress, fondoTextoPress, colorLetraPress, nav}) {
    const navigate = useNavigate();

    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", height: "40px", maxWidth: "180px", borderRadius: "40px", border: `1px solid ${colorBordeBase}`, paddingRight: "10px", paddingLeft: "10px", overflow: "hidden" }} 
        onMouseEnter={(e) => { 
            e.currentTarget.querySelector(".hover-bg").style.width = "100%"; 
            e.currentTarget.style.color = colorLetraPress;  
            let icon = e.currentTarget.querySelector("i");  
            icon.classList.remove("bi-plus-circle-fill");  
            icon.classList.add("bi-x-circle-fill");  
            icon.style.transform = "rotate(90deg)";  
            icon.style.color = colorIconoPress; 
        }} 
        onMouseLeave={(e) => { 
            e.currentTarget.querySelector(".hover-bg").style.width = "0%"; 
            e.currentTarget.style.color = colorLetraBase;  
            let icon = e.currentTarget.querySelector("i");  
            icon.classList.remove("bi-x-circle-fill");  
            icon.classList.add("bi-plus-circle-fill");  
            icon.style.transform = "rotate(0deg)";  
            icon.style.color = colorIconoBase;  
        }}> 
        {/* Fondo animado */}
        <div className="hover-bg" style={{ position: "absolute", top: "0", left: "0", width: "0%", height: "100%", background: fondoTextoPress, transition: "width 0.4s ease", zIndex: "1" }}></div>

        {/* Ícono que sobresale */}
        <i className="bi bi-plus-circle-fill" style={{ fontSize: "40px", color: "#05AFA5", position: "relative", left: "-11.5px", transition: "transform 0.3s ease, color 0.3s ease", zIndex: "2" }}></i> 

        {/* Texto */}
        <span style={{ position: "relative", zIndex: "2", paddingLeft: "0px"}} onClick={() => navigate(`/${nav}`)}>Más Información</span>
        </div>
    )
}

export default BotonAnimado
