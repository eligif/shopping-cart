import React, { useEffect } from "react";
import CartItems from "./CartItems";
import "../Styles/Cart.css";

export default function Cart({ shoppingList, totalAmount }) {
  console.log(shoppingList);

  let number;

  return (
    <div>
      <div className="myCart">
        <nav>
          <ul>
            <li id="i_close" style={{fontSize:"20px",color:"black"}}>x</li>
          </ul>
        </nav>
        <h1>My Cart</h1>
        <CartItems shoppingList={shoppingList} totalAmount={totalAmount} />
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
