import React from 'react';

import './Button.css';

function Button({ msg }) {
    return (
        <button className="button" type='button'>{msg}</button>
    )
}

export default Button;
