import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const db = getFirestore()
        const itemCollection = collection(db, "productos");

      if (categoria){
        const productFilter = query(itemCollection, where('categoria', '==', categoria))
            getDocs(productFilter)
                .then((res) => setCategoria(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
                .catch((error) => console.error(error))
      }
      else {
        getDocs(itemCollection)
                .then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
                .catch((error) => console.error(error))
      }
  }, [categoria]);
  return (
    <div className="container">
      <ItemList data={data}></ItemList>
    </div>
  );
};

export default ItemListContainer;