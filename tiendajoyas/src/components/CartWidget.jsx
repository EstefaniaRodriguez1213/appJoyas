import React, {useContext} from "react";
import { BsCart2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);
  
  return (
    <>
  <div>
      <Button variant="dark" >
        <BsCart2 />
      </Button>{' '}<p className="cantidad">{cantidadTotal()}</p>
    </div>
    </>
  );
};

export default CartWidget;
