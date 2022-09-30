import React , {useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../App.css';
import { CartContext } from "./CartContext";

const ItemDetail = ({ data2 }) => {
  const {agregarProductoCarrito} = useContext(CartContext);

  const [show, setshow] = useState(false)

function onAdd(cont){
  agregarProductoCarrito(data2, cont);
  data2.stock = data2.stock - cont;
  setshow(true);
}

  return (
    <div>
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={data2.image} className='card'/>
        <Card.Body>
        <div className="text-center">
          <Card.Title>{data2.nombreArticulo}</Card.Title>
          <Card.Text>{data2.descripcion}</Card.Text>
          <Card.Text>Precio: ${data2.precio}</Card.Text>
          <Card.Text>Stock: {data2.stock}</Card.Text>
          {show ? (<Link to="/cart" className="btn btn-primary" type="button">
                Finalizar compra
                </Link>
                ) : <ItemCount stock={data2.stock} onAdd={onAdd}></ItemCount> 
                }
          </div>
        </Card.Body>
        <div>
      </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
