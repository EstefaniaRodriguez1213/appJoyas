import React , {useState} from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemDetail = ({ data2 }) => {

  const [show, setshow] = useState(false)

function onAdd(cont){
  setshow(true);
  data2.stock = data2.stock - cont;
  console.log(data2.id, cont)
}
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`../${data2.image}`}/>
        <Card.Body>
          <Card.Title>{data2.nombreArticulo}</Card.Title>
          <Card.Text>{data2.descripcion}</Card.Text>
          <Card.Text>Precio: ${data2.precio}</Card.Text>
          <Card.Text>Stock: {data2.stock}</Card.Text>
          {show ? (<Link to="/cart" className="btn btn-primary" type="button">
                Ver carrito
                </Link>
                ) : <ItemCount stock={data2.stock} onAdd={onAdd}></ItemCount> 
                }
        </Card.Body>
        <div>
      </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
