import React from 'react';
import OrderButton from '../OrderButton/OrderButton';
import './BedSimulator.css';

function BedSimulator() {
    return (
        <div id='bed-simulator' className='bed-simulator-container section-break-separator'>
            <p className='bed-simulator-title section-item-item-separator'>
                Descubra qual o melhor tamanho de cama para você baseado no seu biotipo
            </p>
            <div className="inputs-container section-item-item-separator">
                <input type="text" placeholder='Tamanho (em m)' />
                <input type="text" placeholder='Peso (em kg)' />
            </div>
            <OrderButton msg='Minha cama ideal' />
        </div>
    )
}

export default BedSimulator
