import React from "react";
import CartItem from "./CartItem";

export default function CartItems({ shoppingList }) {
  if (shoppingList == 0) {
    return (
      <>
        <h4>Your cart is empty</h4>
      </>
    );
  }

  console.log("im hehre");
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
