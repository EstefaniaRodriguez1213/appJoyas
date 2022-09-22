import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [data2, setData] = useState([]);
  const { id } = useParams()
 

  useEffect(() => {
    const productdb = getFirestore()
    const prodcuctDoc = doc(productdb, 'productos', id)
    getDoc(prodcuctDoc)
    .then((res) => setData({ id:res.id, ...res.data()}))
}, [id]);
      

  return (
    <div className="container">
      <ItemDetail data2={data2}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
