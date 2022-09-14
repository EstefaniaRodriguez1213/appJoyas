import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

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

  function handonAdd(){
    onAdd(cont)   
}

  return (
    <div>
      <div>
        <Button onClick={handleLess}>-</Button>  {cont}  {' '}
        <Button onClick={handleAdd}>+</Button>
      </div>
      <div>
      <Button onClick={handonAdd}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
