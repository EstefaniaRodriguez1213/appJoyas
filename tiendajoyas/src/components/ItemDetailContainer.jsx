import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {db} from '../firebase/firebase.js';

const ItemDetailContainer = () => {
  const [data2, setData] = useState([]);
  const { id } = useParams()

    const getProducto = async () => {
    const document = doc(db, "productos", id)
    const response = await getDoc(document)
    const data2 = {id: response.id, ...response.data()}
    setData(data2)
}
useEffect(() => {
    getProducto()
}, []);
      

  return (
    <div className="container">
      <ItemDetail data2={data2}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
