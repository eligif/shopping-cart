import React from "react";
import Item from "./Item";

export default function ItemList({ items, shoppingFunc,itemPageFunc }) {
  return (
    <div className="Item_list">
      {items.map((item, index) => {
        return (
          <>
            <Item key={index} item={item} shoppingFunc={shoppingFunc} itemPageFunc={itemPageFunc} />
          </>
        );
      })}
    </div>
  );
}
