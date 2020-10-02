import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { BedData } from '../../assets/utils/BedData';
import { BedTypeData } from '../../assets/utils/BedTypeData';

import elegance from '../../assets/images/elegance.JPG';
import harmony from '../../assets/images/harmony.JPG';
import romance2 from '../../assets/images/romance2.JPG';
import celebration from '../../assets/images/celebration.png';
import venezza from '../../assets/images/venezza.jpg';
import vienna from '../../assets/images/vienna.jpg';

import './Bed.css';

function Bed({ bedCode, separator }) {
    const [modal, setModal] = useState(false);

    const IMAGES = [
        venezza, 
        elegance, 
        harmony, 
        romance2,
        vienna, 
        celebration
    ]
    
    const { model, modelData, typePrices, description } = BedData[bedCode]

    const typePricesData = Object.entries(typePrices);
    const bedSizeData = Object.entries(BedTypeData);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className={`bed-container ${separator}`}>
                <div className="bed-title-container">
                    <h1>{model}</h1>
                    <button type='button'>Fazer o pedido</button>
                </div>

                <p className="bed-description">
                    {description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </p>
                <figure className='bed-image section-item-item-separator'>
                    <Button
                        onClick={toggle}
                        color='info'
                    >
                        <img src={IMAGES[bedCode]} alt={model} />
                    </Button>
                    <small className="click-image-text section-item-item-separator">
                        Clique na imagem para mais informações.
                    </small>
                </figure>
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h1>{model}</h1>
                </ModalHeader>
                <ModalBody>
                    <div className="bed-data-container">
                        <h2 className='section-title'>Informações da cama:</h2>
                        <div className="model-data-container">
                            {modelData.map(data => <li>{data}</li>)}
                        </div>
                        <h2 className='section-title section-item-item-separator'>Valores:</h2>
                            {typePricesData.map((data) => 
                                <div className="bed-size-wrapper">
                                    <h3>{data[0]}: {bedSizeData.map(sizeInfo => data[0] == sizeInfo[0] ? sizeInfo[1] : null)}</h3>
                                    <h4>À Vista: <strong>R${data[1][0]}</strong></h4>
                                    <h4>Parcelado: <strong>R${data[1][1]}</strong></h4>
                                    <a href="" className='orderButton'>Faça seu pedido</a>
                                </div>
                            )}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Bed
