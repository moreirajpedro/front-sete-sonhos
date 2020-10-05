import React, { useState } from 'react';

import logoImg from '../../assets/images/logo.PNG';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleMenuIconClick = () => setClick(!click);
    const handleMenuItemClick = () => setClick(false);

    return (
        <nav className='nav-container'>
            <a href="/"><img src={logoImg} alt="Logo" className="logo-img" /></a>
            <div className="menu-icon" onClick={handleMenuIconClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {click &&
                <ul className='nav-menu-active'>
                    <li className='nav-item'>
                        <a href="#about-us-section" onClick={handleMenuItemClick}>Sobre nós</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#newsletter-register" onClick={handleMenuItemClick}>Promoções</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#beds-section" onClick={handleMenuItemClick}>Conferir camas</a>
                    </li>
                    {/* <li className='nav-item'>
                        <a href="#testemonials-section" onClick={handleMenuItemClick}>Testemunho dos clientes</a>
                    </li> */}
                    <a href="https://api.whatsapp.com/send?phone=558599467617&text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20colch%C3%B5es%20da%20Sete%20Sonhos." target="_blank" className="button-navbar" onClick={handleMenuItemClick}>Faça seu pedido</a>
                </ul>}
        </nav>
    )
}

export default Navbar;