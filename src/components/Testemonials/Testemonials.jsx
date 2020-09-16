import React from 'react'

import Testemonial from '../Testemonial/Testemonial'

function Testemonials() {
    return (
        <section id='testemonials-section' className='section-separator'>
            <h1 className='section-title-1'>Clientes</h1>
            <div className="testemonials-container section-break-separator">
                <Testemonial
                    image=''
                    name='João Pedro Moreira'
                    date='16/09/2020'
                    bedModel='king'
                    testemonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                />
            </div>
        </section>
    )
}

export default Testemonials
