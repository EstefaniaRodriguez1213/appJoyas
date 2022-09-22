import React, {useContext} from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);
  
  return (
    <>
  <div>
  <Link to="/cart" className="btn btn-dark" type="button">{<BsCart2 />}<p className="cantidad">{cantidadTotal()}</p></Link>
    </div>
    </>
  );
};

export default CartWidget;
