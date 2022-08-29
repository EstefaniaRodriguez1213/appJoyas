import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "./Productos";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productos);
    });
    getData
      .then((res) => setData(res))
      .catch((error) => console.error("ocurrio algo inesperado"));
  }, []);
  return (
    <div className="container">
      <ItemList data={data}></ItemList>
    </div>
  );
};

export default ItemListContainer;
