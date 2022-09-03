import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "./Productos.js";

const ItemDetailContainer = () => {
  const [data2, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productos);
    });
 
     getData
       .then((res) => setData(res.find((product) => product.id === 1)))
       .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
   }, []);

      

  return (
    <div className="container">
      <ItemDetail data2={data2}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
