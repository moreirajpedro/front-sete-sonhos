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
            <a href="https://api.whatsapp.com/send?phone=558599467617&text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20colch%C3%B5es%20da%20Sete%20Sonhos." target="_blank" className='orderButton'>Faça seu pedido</a>
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
