import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import '../App.css';

const Items = ({ productos }) => {
  return (
    <div className="container">
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={productos.image} className="card"/>
        <Card.Body>
          <Card.Title className="text-center">{productos.nombreArticulo}</Card.Title>
          <Link to={`/detalles/${productos.id}`}>
          <div className="text-center">
          <Button variant="primary">Ver mas</Button>
          </div>
          </Link>
        </Card.Body>
      </Card>
      </div>
  );
};

export default Items;
