import React, { useState } from 'react';
import axios from 'axios';


import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('')

    const formSubmit = (e) => {
        e.preventDefault();

        let data = email;

        axios.post('/send-email', data)
            .then(res => {
                setEmail('');
            })
            .catch(() => {
                console.log('Message not sent');
            })
    }

    return (
        <footer id='footer-section' className='section-separator'>
            <div className="mail-list-register">
                <label className='mail-input-label' htmlFor='mail-input'>Quer ficar por dentro de todas as nossas promoções? Cadastre o seu melhor email abaixo:</label>
                <form onSubmit={(e) => formSubmit(e)}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        type="email"
                        className='mail-input section-item-item-separator'
                        placeholder='Insira aqui o seu melhor email'
                        required
                        value={email}
                    />
                    <button type='submit' >Inscreva-se</button>
                </form>
            </div>
            <div className="bulleted-section-list section-break-separator">
                <a href='#about-us-section'>Sobre nós</a>
                <a href="#beds-section">Conferir camas</a>
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
