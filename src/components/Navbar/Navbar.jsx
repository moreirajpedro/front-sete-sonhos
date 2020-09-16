import React, { useState } from 'react';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleMenuIconClick = () => setClick(!click);
    const handleMenuItemClick = () => setClick(false);

    return (
        <nav className='nav-container'>
            <p className="logo-img">Logo</p>
            <div className="menu-icon" onClick={handleMenuIconClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {click &&
                <ul className='nav-menu-active'>
                    <li className='nav-item'>
                        <a href="#about-us-section" onClick={handleMenuItemClick}>Sobre nós</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#beds-section" onClick={handleMenuItemClick}>Camas</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#bed-simulator" onClick={handleMenuItemClick}>Simular minha cama ideal</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#testemonials-section" onClick={handleMenuItemClick}>Clientes</a>
                    </li>
                    <button className="button-navbar" type='button' onClick={handleMenuItemClick}>Faça seu pedido</button>
                </ul>}
        </nav>
    )
}

export default Navbar;