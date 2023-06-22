import React from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";
import { useState, createContext } from "react";

import logo from "../200x200.svg";

export default function () {
  const [shoppingCartAmount, setShoppingCartAmount] = useState(0);
  const [myShoppingList, setShoppingList] = useState([]);

  const UserContext = createContext();

  const itemList = [
    {
      id: 1,
      productName: "pencil",
      price: 1.99,
      brand: "levi",
      description: "Great pencil for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 2,
      productName: "Paper",
      price: 1.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
    {
      id: 3,
      productName: "ipad",
      price: 130.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
    {
      id: 4,
      productName: "iphone",
      price: 522.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
    {
      id: 5,
      productName: "white BOX",
      price: 32.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
    {
      id: 6,
      productName: "sunglasses",
      price: 35.99,
      brand: "levi",
      description: "Great paper for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
  ];

  function ShoppingList(added) {
    setShoppingList((myShoppingList) => [...myShoppingList, added]);
    setShoppingCartAmount(shoppingCartAmount + added.price);

    return myShoppingList, shoppingCartAmount;
  }

  function showPageImage(item) {
    console.log("showPageImage")
    return <h1>{item.productName}</h1>;
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
          <ItemList
            shoppingFunc={ShoppingList}
            itemPageFunc={showPageImage}
            items={itemList}
          ></ItemList>
        </div>
      </main>
      <aside>
        <Cart shoppingList={myShoppingList} totalAmount={shoppingCartAmount} />
      </aside>
    </>
  );
}
