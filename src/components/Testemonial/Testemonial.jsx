import React from 'react'

function Testemonial({ image, name, bedModel, date, testemonial }) {
    return (
        <div className='testemonial-container'>
            <div className="clientInformationsContainer">
                <img src={image} alt="Foto do cliente" className="clientImage" />
                <h1 className='clientName'>{name}</h1>
            </div>
            <p className="shoppingDescription">Comprou a cama {bedModel} no dia {date}</p>

            <p className="testemonial-text">
                {testemonial}
            </p>

            <button type='button'>Conferir cama {bedModel}</button>
        </div>
    )
}

export default Testemonial
