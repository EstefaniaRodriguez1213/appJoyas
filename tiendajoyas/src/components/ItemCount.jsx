import { React, useState } from "react";
import Button from "react-bootstrap/Button";

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
      <div>
        <Button onClick={handleLess}>-</Button> {cont}
        <Button onClick={handleAdd}>+</Button>
      </div>
      <div>
        <Button onClick={() => onAdd(cont)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
