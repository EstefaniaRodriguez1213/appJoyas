import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Items = ({ productos }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
          <Card.Title>{productos.nombreArticulo}</Card.Title>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
