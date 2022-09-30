import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();
  const [load, setLoad] = useState(true) 

  const getProducts = async (categoria) => {
    setLoad(true)
    const document = categoria ? query(collection (db, "productos"), where("categoria", "==", categoria)) : collection (db, "productos")
    const coleccion = await getDocs(document)
    const productos = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
    setData(productos)
    setLoad(false)
}

useEffect(() => {
    getProducts(categoria)
}, [categoria])

  return (
    <>
    {
      <>
      {load ? 
        <div className="text-center container">
        <Spinner style={{ width: '28rem', height: '28rem'}}  animation="grow" variant="secondary" />
        </div> : <ItemList data={data}></ItemList>}
    </>
    }
    </>
  );
};

export default ItemListContainer;