import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const Items = ({ productos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
      <Card >
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
          <Card.Title>{productos.nombreArticulo}</Card.Title>
          <Link to={`/detalles/${productos.id}`}>
          <Button variant="primary">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
    </div>
    </div>
  );
};

export default Items;
