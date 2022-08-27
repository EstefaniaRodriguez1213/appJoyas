import { React } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ nombre }) => {
  function onAdd(cont) {
    console.log(`Se han seleccionado ${cont} productos`);
  }
  return (
    <div>
      <ItemCount stock={5} onAdd={onAdd}></ItemCount>
    </div>
  );
};

export default ItemListContainer;
