import React from 'react';
import BotonAnimado from './BotonAnimado';
const ServiceColumn = ({ image, title, description }) => {
    return (
        <div className="col-md-4">
            <div className="disenio">
                <div className="design card-body flex-column">
                    <div className="circle-image">
                        <img src={require(`../../images/${image}`)} alt={title} className="img-fluid rounded-circle" />
                    </div>
                    <h2 className="card-title mt-3 mb-3">{title}</h2>
                    <p className="card-text text-start mb-5">{description}</p>
                    {/* <a href="#" className="btn btn-info">Información</a> */}
                    <BotonAnimado
                        colorIconoBase="#05AFA5"
                        colorLetraBase="white"
                        colorBordeBase="#05AFA5"
                        colorIconoPress="white"
                        fondoTextoPress="black"
                        colorLetraPress="white"
                        // nav={direccion}
                    />
                </div>
            </div>
            {/* 
            <div className="card text-center">
                <div className="card-body">
                    <div className="circle-image">
                        <img src={require(`../../images/${image}`)} alt={title} className="img-fluid rounded-circle" />
                    </div>
                    <h5 className="card-title mt-3">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-info">Información</a>
                </div>
            </div>
            */}
        </div>
    );
};

export default ServiceColumn;
