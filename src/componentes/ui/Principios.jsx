import React from 'react'
import AnimatedSection from '../AnimatedSection';

function Principios({ titulo, texto, imagen }) {
    return (
        <AnimatedSection as="div" direction="right" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card position-relative m-2">
                <div className="image-container">
                    <img 
                        src={require(`../../images/${imagen}.png`)} 
                        className="card-img-top" 
                        alt="Imagen" 
                    />
                    {/* Título centrado sobre la imagen con opacidad oculta por defecto */}
                    <div className="titulo-overlay">
                        <p  style={{fontFamily: "Red Hat Display"}}>{titulo}</p>
                    </div>
                </div>
                <div className="card-body text-center">
                    <p className="card-text">{texto}</p>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Principios
