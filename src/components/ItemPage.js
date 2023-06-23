import React from "react";
import "../Styles/ItemPage.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function ItemPage(item) {
  const location = useLocation();
  const data = location.state?.data;
  // console.log(data.productName + "itemPage");
  // const { state } = this.props.location;
  const { id } = useParams();
  console.log(item.productName);

  return (
    <>
      <div className="item_container">
        <div className="img_container"></div>
        <img src="https://image-placeholder.com/images/actual-size/468x336.png"></img>
        <div className="smallImage_container">
          <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
          <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
          <img src="https://image-placeholder.com/images/actual-size/100x75.png"></img>
        </div>
        <aside>
          <div className="details_container">
            <h3 id="productName">{data.productName}</h3>
            <p id="productPrice">{data.price}</p>
            <p id="productDescription">{data.description}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
