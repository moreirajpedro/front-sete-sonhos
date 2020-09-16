import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <footer id='footer-section' className='section-separator'>
            <div className="mail-list-register">
                <p>Quer ficar por dentro de todas as nossas promoções? Cadastre o seu melhor email abaixo:</p>
                <form>
                    <input type="text" className='section-item-item-separator' placeholder='Insira aqui o seu melhor email' />
                    <button type='button' >Inscreva-se</button>
                </form>
            </div>
            <div className="bulleted-section-list section-break-separator">
                <a href='#about-us-section'>Sobre nós</a>
                <a href="#beds-section">Conferir camas</a>
                <a href="#bed-simulator">Simular minha cama ideal</a>
                <a href="#testemonials-section">Testemunho dos clientes</a>
            </div>
            <div className="social-container section-break-separator">
                <a href="">
                    <i class="fab fa-instagram" />
                </a>
                <a href="">
                    <i class="fab fa-facebook" />
                </a>
                <a href="">
                    <i class="fab fa-linkedin-in" />
                </a>
            </div>
            <small>
                <p className='section-break-separator'>A Sete Sonhos é uma revendedora autorizada da marca de colchões Eurosono.</p>
                <p>Sete Sonhos © 2020.</p>
            </small>
        </footer>
    )
}

export default Footer
