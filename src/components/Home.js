import React from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";
import { useState, createContext } from "react";

import { Beverage } from "../App";
import logo from "../200x200.svg";

export default function () {
  const [shoppingCartAmount, setShoppingCartAmount] = useState(0);
  const [myShoppingList, setShoppingList] = useState([]);

  const itemList = [
    {
      id: 1,
      productName: "pencil",
      price: 1.99,
      brand: "levi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam minima provident! Voluptas, doloremque et?",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 2,
      productName: "Paper",
      price: 1.99,
      brand: "levi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam minima provident! Voluptas, doloremque et?",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },
    {
      id: 3,
      productName: "ipad",
      price: 130.99,
      brand: "levi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti in similique adipisci tenetur quasi reprehenderit optio amet itaque molestiae?",
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti in similique adipisci tenetur quasi reprehenderit optio amet itaque molestiae?",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 7,
      productName: "Tshirt",
      price: 15.99,
      brand: "optimize",
      description: "Great tshirt for clothing ",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 8,
      productName: "pants",
      price: 55,
      brand: "optimize",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci temporibus deserunt! Officia eligendi, dolore amet tempore, nisi quidem tenetur veritatis error fugit, itaque praesentium dicta laboriosam soluta nulla deserunt sint optio iusto minus excepturi?",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 9,
      productName: "sunglasses",
      price: 35.99,
      brand: "levi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci temporibus deserunt! Officia eligendi, dolore amet tempore, nisi quidem tenetur veritatis error fugit, itaque praesentium dicta laboriosam soluta nulla deserunt sint optio iusto minus excepturi?",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 10,
      productName: "table",
      price: 135,
      brand: "zara home",
      description: "wood table for writing stuff",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 11,
      productName: "hat",
      price: 16,
      brand: "diesel",
      description: "Great hat for sun heat",
      image:
        "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
    },

    {
      id: 12,
      productName: "envelops",
      price: 8,
      brand: "paper inc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci temporibus deserunt! Officia eligendi, dolore amet tempore, nisi quidem tenetur veritatis error fugit, itaque praesentium dicta laboriosam soluta nulla deserunt sint optio iusto minus excepturi?",
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
    console.log("showPageImage");
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
        <div className="about_container">
          <p>
            eveniet tempora necessitatibus? Consequatur amet hic id distinctio
            delectus ipsa tempore facere dignissimos fugit recusandae
            consequuntur ut placeat, quasi nostrum ipsum earum mollitia expedita
            vero. Suscipit consectetur amet officiis vel recusandae odit eos
            soluta facere iusto, voluptas in laborum illum. In quas unde cum
            labore iste, nihil expedita, temporibus animi laborum ab accusantium
            tempore vero libero aliquam quasi consequuntur sunt ducimus rerum
            debitis officia assumenda suscipit at dolorum. Minus expedita
            tenetur praesentium esse eum, consequatur, nulla animi molestias nam
            atque explicabo. Libero facere sit, doloribus sequi exercitationem
            unde voluptatum consequatur velit, laboriosam eaque non aliquam!
          </p>
        </div>
        <div>
          <ItemList
            shoppingFunc={ShoppingList}
            itemPageFunc={showPageImage}
            items={itemList}
          ></ItemList>
        </div>
      </main>
      {/*<aside>
        <Cart shoppingList={myShoppingList} totalAmount={shoppingCartAmount} />
      </aside>*/}
      <footer></footer>
    </>
  );
}
