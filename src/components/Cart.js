import React, { useEffect } from "react";
import CartItems from "./CartItems";

export default function Cart({ shoppingList, totalAmount }) {
  console.log(shoppingList);

  let number;

  return (
    <div>
      <div className="myCart">
        <h1>My Cart</h1>
        <CartItems shoppingList={0} totalAmount={0} />
        <br></br>
        <div id="totalAmount">
          <br />
          Total amount:<span> {number}&#36;</span>
        </div>

        <button id="btn_checkout" type="button">
          CheckOut
        </button>
      </div>
    </div>
  );
}
