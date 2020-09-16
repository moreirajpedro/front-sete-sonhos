import React from 'react';

import Button from '../Button/Button';
import Testemonial from '../Testemonial/Testemonial';

import './Testemonials.css';

function Testemonials() {
    return (
        <section id='testemonials-section' className='section-separator'>
            <h1 className='section-title-1'>Clientes</h1>
            <div className="testemonials-container section-item-item-separator">
                <Testemonial
                    image=''
                    name='João Pedro Moreira'
                    date='16/09/2020'
                    bedModel='king'
                    testemonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                />
            </div>

            <Button
                msg='Simular cama ideal'
            />
            <Button
                msg='Fazer seu pedido'
            />
        </section>
    )
}

export default Testemonials
