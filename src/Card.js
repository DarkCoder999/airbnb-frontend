import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function Card({ src1, src2, src3, title, description, price }) {
    return (
        <div className="cardcontainer shadow" style={{ display: 'block', width: 350, marginBottom:20, marginRight:20, borderRadius: 20}}>
            <Carousel>
                <Carousel.Item interval={3000}>
                <img className="cimage d-block w-100" src={src1} alt="One" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img className="cimage d-block w-100" src={src2} alt="Two" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img className="cimage d-block w-100" src={src3} alt="Three" />
                </Carousel.Item>
            </Carousel>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card