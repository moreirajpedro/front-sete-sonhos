import React from 'react'

import './AboutUsBulletedList.css';

function AboutUsBulletedList({ title, description, separator }) {
    return (
        <div className={`bulleted-item-container ${separator}`}>
            <div className="check-container">
                <i class="fas fa-check" />
            </div>
            <div className="item-text-wrapper">
                <h1 className="item-title">
                    {title}
                </h1>
                <p className="item-description">
                    {description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}
                </p>
            </div>
        </div>
    )
}

export default AboutUsBulletedList;
