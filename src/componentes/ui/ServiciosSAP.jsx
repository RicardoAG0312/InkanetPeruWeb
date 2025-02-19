import React from 'react'
import ViñetasSomos from "./ViñetasSomos";


function ServiciosSAP({img, titulo, texto, fondo, fondoIcono, colorIcono, colorLetra}) {
    return (
        <div className='py-4 d-flex justify-content-center align-items-center gap-3 flex-column'>
            {img && <img src={require(`../../images/${img}.png`)} alt="imagen" className='w-25 img-fluid'/>}
            {titulo && <h2 className='text-white text-center mb-4'> {titulo} </h2>}
            <ViñetasSomos 
                texto= {texto} 
                fondo = {fondo}
                fondoIcono= {fondoIcono}
                colorIcono = {colorIcono}
                colorLetra = {colorLetra}
            />
        </div>
    )
}

export default ServiciosSAP
