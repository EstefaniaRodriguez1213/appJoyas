import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const Items = ({ productos }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
          <Card.Title>{productos.nombreArticulo}</Card.Title>
          <Link to={`/detalles/${productos.id}`}>
          <Button variant="primary">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
