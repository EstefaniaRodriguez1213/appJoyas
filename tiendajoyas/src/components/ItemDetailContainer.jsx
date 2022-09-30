import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../firebase/firebase.js';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const [data2, setData] = useState([]);
  const { id } = useParams()
  const [load, setLoad] = useState(true)

    const getProducto = async () => {
    const document = doc(db, "productos", id)
    const response = await getDoc(document)
    const data2 = {id: response.id, ...response.data()}
    setData(data2)
    setLoad(false)
}
useEffect(() => {
    getProducto()
}, []);
      

  return (
    <>
            {load ? 
            <div className="text-center container">
            <Spinner style={{ width: '28rem', height: '28rem'}} animation="grow" variant="secondary" /> 
            </div>
            : 
            <div className="container">
               <ItemDetail data2={data2}></ItemDetail>
          </div>}
        </>
  );
};

export default ItemDetailContainer;
