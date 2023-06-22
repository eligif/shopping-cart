import React from "react";

export default function CartItem({ item }) {
  let firstChar = item.productName.charAt(0).toUpperCase();
  let myarray = item.productName.split(item.productName.charAt(0));
  let name2 = firstChar.concat("", myarray[1]);

  console.log(name2);
  return (
    <div>
      <div>
        {name2} <span>{item.price} &#36;</span>
      </div>
    </div>
  );
}
