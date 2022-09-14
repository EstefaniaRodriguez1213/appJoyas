import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/anillo.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Joyas de primera calidad</h3>
          <p>Diamantes y perlas importadas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/pulsera.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Porque pensamos en vos</h3>
          <p>
           Te presentamos nuestros nuevos productos en la web
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Carrousel;
