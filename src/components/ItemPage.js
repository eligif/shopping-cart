import React, { useState } from "react";
import "../Styles/ItemPage.css";
import { useOutletContext, useParams } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";

export default function ItemPage({ item }) {
  const location = useLocation();
  const data = location.state?.data;
  const shoppingList = location.state?.shoppingList;
  const { id } = useParams();
  const [count, setCount] = useState(1);
  console.log(shoppingList + " s");

  return (
    <>
      <div className="item_container">
        <div className="img_container">
          <div className="mainImage_container">
            <img src="https://image-placeholder.com/images/actual-size/468x336.png"></img>
          </div>

          <div className="smallImage_container">
            <ul className="ul_small_image">
              <li>
                <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
              </li>
              <li>
                <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
              </li>
              <li>
                <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
              </li>
            </ul>
          </div>
        </div>

        <div className="details_container">
          <h1 id="productName">{data.productName}</h1>
          <p id="productPrice">{data.price}</p>
          <p id="productDescription">{data.description}</p>
          <div className="quntitiAndAdd">
            <div className="quntityHolder">
              <button
                onClick={() => setCount(count > 0 ? count - 1 : count == 0)}
                id="btn_minus"
                type="button"
              >
                -
              </button>

              <span min={0} id="inputquntity">
                {count}
              </span>
              <button
                onClick={() => setCount(count + 1)}
                id="btn_plus"
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <button id="btn_AddToCart" type="button">
            Add to cart <span style={{ fontSize: "15px" }}>&#8739; </span>{" "}
            {data.price}&nbsp;x&nbsp;{count} ={" "}
            {(data.price * count).toPrecision(4)}
          </button>
        </div>
      </div>
      <Cart shoppingList={shoppingList}></Cart>
    </>
  );
}
