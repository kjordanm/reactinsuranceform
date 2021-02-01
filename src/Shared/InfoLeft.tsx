import React from 'react';
import { Col } from 'react-bootstrap';
import '../Shared/InfoLeft.scss';

export default function InfoLeft() {
    return (
        <Col xs={12} sm={12} md={6} className="info-left-wrapper">
            <div className="info-left">
                <div className="info-left__square">
                    <h1 className="info-left__title">Seguro de <br/><b>Salud</b></h1>
                    <ul className="info-left__list">
                        <li className="info-left__list__item">Compralo de manera facil y rapida</li>
                        <li className="info-left__list__item">Cotiza y compra tu seguro 100$ digital</li>
                        <li className="info-left__list__item">Hasta S/. 12 millones de cobertura anual</li>
                        <li className="info-left__list__item">Mas de 300 clinicas en todo el Peru</li>
                    </ul>
                </div>
                <img src={"./base.png"} className="info-left__border"/>
            </div>
        </Col>
        
    );
}