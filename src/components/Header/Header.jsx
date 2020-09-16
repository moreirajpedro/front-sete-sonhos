import React, { useState } from 'react';

import bed1 from '../../assets/images/bed1.JPG';
import bed2 from '../../assets/images/bed2.JPG';
import bed3 from '../../assets/images/bed3.JPG';
import bed4 from '../../assets/images/bed4.JPG';
import bed5 from '../../assets/images/bed5.JPG';

import Button from '../Button/Button';

import './Header.css';


function Header() {
    const BEDS = [
        bed1,
        bed2,
        bed3,
        bed4,
        bed5
    ]

    const [bed, setBed] = useState(BEDS[0]);

    return (
        <header className='header-container'>
            <p className='secondary-text'>Revendedor Eurosono</p>
            <h1 className='primary-text'>Confiança e conforto de uma marca com mais de <span className='important-text'>70 anos.</span></h1>
            <Button
                msg='Faça seu pedido'
            />
            <figure className="carousel-container">
                <img src={bed} className='image-carousel' alt="Cama Eurosono" />
            </figure>
            <a href="#about-us-section" className='scroll-down-button'>
                <i class="fas fa-chevron-down" />
            </a>
        </header>
    )
}

export default Header;
