import React from 'react';

import './OrderButton.css';

function OrderButton({ msg }) {
    return (
        <button className="button section-item-item-separator" type='button'>{msg}</button>
    )
}

export default OrderButton;
