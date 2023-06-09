import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Item({ item, shoppingFunc, itemPageFunc }) {
  const [ProdactName, setProdactName] = useState(null);

  useEffect((name2) => {
    let firstChar = item.productName.charAt(0).toUpperCase();
    let myarray = item.productName.split(item.productName.charAt(0));
    setProdactName((name2 = firstChar.concat("", myarray[1])));
  }, []);

  return (
    <>
      <div className="item_card">
        <Link
          to={{
            pathname: `/ItemPage/${item.id}`,
            search: "?sort=name",
            hash: "#the-hash",
            state: { shoppingFunc: "llll" },
          }}
          state={{ data: item }}
          className="link"
        >
          <img src={item.image} id="card_image" alt="not"></img>
          <div>{ProdactName}</div>
          <div>{item.price}&#x24;</div>
          <div>By: {item.brand}</div>
        </Link>
        <button
          onClick={() => {
            shoppingFunc(item);
          }}
          type="button"
          id="add_btn"
        >
          Buy now
        </button>
      </div>
    </>
  );
}
