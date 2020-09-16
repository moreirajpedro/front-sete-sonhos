import React from 'react'

import { BedData } from '../../assets/utils/BedData';

import './Bed.css';

function Bed({ bedCode, separator }) {
    const { title, size, description, image } = BedData[bedCode]

    return (
        <div className={`bed-container ${separator}`}>
            <div className="bed-title-container">
                <h1 className="bed-name">{title}</h1>
                <p>{size}</p>
                <button type='button' className='button-small'>Fazer o pedido</button>
            </div>
            <p className="bed-description">
                {description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>
            <figure className='bed-image'>
                <img className='section-item-item-separator' src={image} alt={title} />
                <small className="click-image-text section-item-item-separator">
                    Clique na imagem para mais informações.
            </small>
            </figure>
        </div>
    )
}

export default Bed
