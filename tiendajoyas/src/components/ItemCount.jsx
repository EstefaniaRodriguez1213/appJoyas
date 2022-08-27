import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCount = ({ stock, onAdd }) => {
  const [cont, setCont] = useState(0);

  function handleAdd() {
    if (cont < stock) {
      setCont(cont + 1);
    }
  }

  function handleLess() {
    if (cont > 0) {
      setCont(cont - 1);
    } else {
      setCont(0);
    }
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/trepadores.webp" />
        <Card.Body>
          <Card.Title>Trepadores Mariposa</Card.Title>
          <Card.Text>Trepadores de Plata y Oro.</Card.Text>
          <Button onClick={handleLess}>-</Button> {cont}
          <Button onClick={handleAdd}>+</Button>
        </Card.Body>
        <Card.Text>Stock {stock}</Card.Text>
        <Button onClick={() => onAdd(cont)}>Confirmar</Button>
      </Card>
    </div>
  );
};

export default ItemCount;
