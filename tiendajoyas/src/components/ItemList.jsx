import { React } from "react";
import Item from "./Items";

const ItemList = ({ data }) => {
  return (
    <div className="row row-cols-auto m-auto">
    {
    data.map((item) => <Item key={item.id} productos={item}></Item>
    )
    }
    </div>
  )
}

export default ItemList;
