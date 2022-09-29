import { React, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";

const ItemCount = ({ stock, onAdd }) => {
  const [cont, setCont] = useState(1);
  const {cart} = useContext(CartContext);

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
    cart.cant = cont;
}

  return (
    <div>
      { stock !==0 ? (
        <div>
        <Button onClick={handleLess}>-</Button>  {cont}  {' '}
        <Button onClick={handleAdd}>+</Button> {' '}
        <Button onClick={handonAdd}>Agregar al carrito</Button>
      </div>)
      :
      <h4>Producto no disponible</h4>
     
    }
    </div>
  );
};

export default ItemCount;
