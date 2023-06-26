import React, { useEffect } from "react";
import CartItems from "./CartItems";

export default function Cart({ shoppingList, totalAmount }) {




  
  useEffect(() => {}, [totalAmount]);

  let number = 0;

  if (totalAmount == 0) {
    number = totalAmount.toPrecision(1);
  } else {
    number = totalAmount.toPrecision(4);
  }

  const boldText = {
    fontWeight: "bold",
  };
  const nobold = {
    fontWeight: "normal",
  };
  return (
    <div>
      <div className="myCart">
        <h1>My Cart</h1>
        <CartItems shoppingList={shoppingList} totalAmount={totalAmount} />
        <br></br>
        <div id="totalAmount" style={boldText}>
          <br />
          Total amount:<span style={nobold}> {number}&#36;</span>
        </div>

        <button id="btn_checkout" type="button">
          CheckOut
        </button>
      </div>
    </div>
  );
}
