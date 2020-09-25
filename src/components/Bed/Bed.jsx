import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { BedData } from '../../assets/utils/BedData';
import { BedTypeData } from '../../assets/utils/BedTypeData';

import elegance from '../../assets/images/elegance.JPG';
import harmony from '../../assets/images/harmony.JPG';
import romance from '../../assets/images/romance.JPG';
import romance2 from '../../assets/images/romance2.JPG';

import './Bed.css';

function Bed({ bedCode, separator }) {
    const [modal, setModal] = useState(false);

    const IMAGES = [elegance, harmony, romance2]
    const { model, modelData, typePrices, description } = BedData[bedCode]
    const { "Casal Padrão": typeCP, King: typeKing, Queen: typeQueen } = BedTypeData;

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
                        {/* Casal Padrão */}
                        <div className="bed-size-wrapper">
                            <h3>{`Casal Padrão: ${typeCP.size}`}</h3>
                            <h4>A Vista: <strong>{typePrices["Casal Padrão"]["À vista"]}</strong></h4>
                            <h4>Parcelado em até 12x: <strong>{typePrices["Casal Padrão"]["Até 12x"]}</strong></h4>
                            <a href="" className="orderButton">Faça seu pedido</a>
                        </div>
                        {/* King */}
                        <div className="bed-size-wrapper">
                            <h3>{`King: ${typeKing.size}`}</h3>
                            <h4>A Vista: <strong>{typePrices.King["À vista"]}</strong></h4>
                            <h4>Parcelado em até 12x: <strong> {typePrices.King["Até 12x"]}</strong></h4>
                            <a href="" className="orderButton">Faça seu pedido</a>
                        </div>
                        {/* Queen */}
                        <div className="bed-size-wrapper">
                            <h3>{`Queen: ${typeQueen.size}`}</h3>
                            <h4>A Vista: <strong>{typePrices.Queen["À vista"]}</strong></h4>
                            <h4>Parcelado em até 12x: <strong> {typePrices.Queen["Até 12x"]}</strong></h4>
                            <a href="" className="orderButton">Faça seu pedido</a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Bed
