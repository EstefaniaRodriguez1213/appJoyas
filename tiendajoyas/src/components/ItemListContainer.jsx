import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "./Productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const {categoria} = useParams();
  useEffect(() => {
    const getData = new Promise((res) => {
      if (categoria){
        res(productos.filter(producto => producto.categoria === categoria));
      }
      else {
        res(productos);
      }
     
    });
    getData
      .then((res) => setData(res))
      .catch((error) => console.error("ocurrio algo inesperado"));
  }, [categoria]);
  return (
    <div className="container">
      <ItemList data={data}></ItemList>
    </div>
  );
};

export default ItemListContainer;
