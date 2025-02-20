import React from 'react'

function Cartas({imagen, texto}) {
    return (
        <div className="col-md-6 d-flex align-items-center mt-5">
            <div className="d-flex justify-content-center align-items-center gap-3"> 
                <img className='w-25 h-auto' src={require(`../../images/${imagen}.png`)} alt="Imagen" />
                <p className="texto" > {texto} </p>
            </div>
        </div>
    )
}

export default Cartas
