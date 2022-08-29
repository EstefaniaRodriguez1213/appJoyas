import { React } from "react";
import Item from "./Items";

const ItemList = ({ data }) => {
  return data.map((item) => <Item key={item.id} productos={item}></Item>);
};

export default ItemList;
