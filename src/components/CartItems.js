import React from "react";
import CartItem from "./CartItem";

export default function CartItems({ shoppingList }) {
  return (
    <div>
      {shoppingList.map((item) => {
        return (
          <>
            <CartItem key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
}
