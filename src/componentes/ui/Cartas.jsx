import React from 'react'
import AnimatedSection from '../AnimatedSection'

function Cartas({ imagen, texto }) {
    return (
        <div className="col-md-6 d-flex align-items-center mt-5">
            <AnimatedSection as="div" direction="right" className="d-flex justify-content-center align-items-center gap-3">
                <img className='w-25 h-auto' src={require(`../../images/${imagen}.png`)} alt="Imagen" />
                <p className="texto" > {texto} </p>
            </AnimatedSection>
        </div>
    )
}

export default Cartas
