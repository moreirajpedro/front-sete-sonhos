import React from 'react';

import './SectionButtonTitle.css'

function SectionButtonTitle({ title, sectionName }) {
    return (
        <div id={sectionName} className='section-separator section-title-container'>
            <p className="section-title-2">
                {title}
            </p>
        </div>
    )
}

export default SectionButtonTitle;
