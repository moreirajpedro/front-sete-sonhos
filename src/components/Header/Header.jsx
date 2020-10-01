import React, { useState } from 'react';

import bed1 from '../../assets/images/bed1.JPG';
import bed2 from '../../assets/images/bed2.JPG';
import bed3 from '../../assets/images/bed3.JPG';
import bed4 from '../../assets/images/bed4.JPG';
import bed5 from '../../assets/images/bed5.JPG';
import headerVideo from '../../assets/images/header-video.mp4';

import './Header.css';


function Header() {
    return (
        <header className='header-container' >
            <p className='secondary-text'>Revendedor Eurosono</p>
            <h1 className='primary-text'>Confiança e conforto de uma marca com mais de <span className='important-text'>60 anos.</span></h1>
            <button type='button'>Faça seu pedido</button>
            {/* <figure className="carousel-container">
                <img src={bed} className='image-carousel' alt="Cama Eurosono" />
            </figure> */}
            <a href="#about-us-section" className='scroll-down-button'>
                <i class="fas fa-chevron-down" />
            </a>
        </header>
    )
}

export default Header;
