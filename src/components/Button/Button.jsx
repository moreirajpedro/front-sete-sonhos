import React from 'react';

import './Button.css';

function Button({ msg }) {
    return (
        <button className="button section-item-item-separator" type='button'>{msg}</button>
    )
}

export default Button;
