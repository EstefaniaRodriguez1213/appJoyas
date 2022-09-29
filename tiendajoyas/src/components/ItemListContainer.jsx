import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  const getProducts = async (categoria) => {
    const document = categoria ? query(collection (db, "productos"), where("categoria", "==", categoria)) : collection (db, "productos")
    const coleccion = await getDocs(document)
    const productos = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
    setData(productos)
}

useEffect(() => {
    getProducts(categoria)
}, [categoria])

  return (
    <div className="container">
         <ItemList data={data}></ItemList>
      </div>
  );
};

export default ItemListContainer;