import React from 'react';

import imgTest from '../../assets/images/bed1.JPG';

import './Testemonial.css';

function Testemonial({ image, name, bedModel, date, testemonial }) {
    return (
        <div className='testemonial-container'>
            <div className="client-informations-container">
                <img src={imgTest} alt="Foto do cliente" />
                <h1>{name}</h1>
            </div>
            <p className="shopping-description">Comprou a cama {bedModel} no dia {date}</p>

            <p className="testemonial-text">
                {testemonial}
            </p>

            <button type='button' className='section-break-separator'>Conferir cama {bedModel}</button>
        </div>
    )
}

export default Testemonial
