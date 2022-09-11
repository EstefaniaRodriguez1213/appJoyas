import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ data2 }) => {

function onAdd(cont){
console.log('Id de Producto: ' + data2.id + ' Cantidad: '+ cont)
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
          <ItemCount stock={data2.stock} onAdd={onAdd}></ItemCount>
        </Card.Body>
        <div>
      </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
