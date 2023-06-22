import React from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import logo from "../200x200.svg";

export default function HomeLayout() {
  const [shoppingCartAmount, setShoppingCartAmount] = useState(0);
  const [myShoppingList, setShoppingList] = useState([]);

  const itemList = [
    {
      id: uuidv4(),
      productName: "pencil",
      price: 1.99,
      brand: "levi",
      description: "Great pencil for writing stuff",
      image: { logo },
    },
    {
      id: uuidv4(),
      productName: "table",
      price: 22.99,
      brand: "cohen",
      description: "Great table for writing stuff",
      Image: "",
    },
    {
      id: uuidv4(),
      productName: "Paper",
      price: 1.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image: "",
    },
    {
      id: uuidv4(),
      productName: "ipad",
      price: 130.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image: "",
    },
    {
      id: uuidv4(),
      productName: "iphone",
      price: 522.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image: "",
    },
    {
      id: uuidv4(),
      productName: "white BOX",
      price: 32.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image: "",
    },
    {
      id: uuidv4(),
      productName: "sunglasses",
      price: 35.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image: "",
    },
  ];

  function ShoppingList(added) {
    setShoppingList((myShoppingList) => [...myShoppingList, added]);
    setShoppingCartAmount(shoppingCartAmount + added.price);

    return myShoppingList, shoppingCartAmount;
  }

  const person = {
    name: "eli",
    lastname: "sudai",
    myfunction: function () {
      return this.name + " " + this.lastname;
    },
  };
  return (
    <>
      <main>
        <div>
          <ItemList shoppingFunc={ShoppingList} items={itemList}></ItemList>
        </div>
      </main>
      <aside>
        <Cart shoppingList={myShoppingList} totalAmount={shoppingCartAmount} />
      </aside>
    </>
  );
}
