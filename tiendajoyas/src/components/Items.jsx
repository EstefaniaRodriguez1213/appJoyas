import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

const Items = ({ productos }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productos.image} />
        <Card.Body>
          <Card.Title>{productos.nombreArticulo}</Card.Title>
          <Card.Text>{productos.descripcion}</Card.Text>
          <Card.Text>Precio: ${productos.precio}</Card.Text>
          <ItemCount stock={productos.stock}></ItemCount>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
