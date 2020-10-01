import React from 'react';

import './AboutUs.css';
import AboutUsBulletedList from '../AboutUsBulletedList/AboutUsBulletedList';

function AboutUs() {
    return (
        <section id="about-us-section" className='section-separator'>
            <h1 className='section-title-1'>Quem somos?</h1>
            <div className="about-us-text-container section-item-item-separator">
                <p className='about-us-text'>Nós somos a Sete Sonhos, o maior E-Commerce de Colchões do Ceará e revendedores autorizados da Colchões Eurosono, venha conhecer nosso catálogo, COBRIMOS QUALQUER OFERTA! Vendemos colchões, bases, camas box novas, completas e lacradas com frete grátis em Fortaleza, entregando e instalando sua cama com segurança, rapidez, e comodidade!</p>
            </div>
            <div className="bulleted-list section-item-item-separator">
                <AboutUsBulletedList
                    title='Confiança'
                    description='Garantia de 1 ano da fábrica.'
                    separator='section-break-separator'
                />
                <AboutUsBulletedList
                    title='Menor preço'
                    description='Cobrimos qualquer oferta de preço Eurosono no Ceará.'
                    separator='section-item-item-separator'
                />
                <AboutUsBulletedList
                    title='Conforto'
                    description='Em até 2 (dois) dias úteis você recebe o seu colchão no conforto da sua casa.'
                    separator='section-item-item-separator'
                />
            </div>
        </section>
    )
}

export default AboutUs;
