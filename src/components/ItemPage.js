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
        <div>
          {/*{data.map((item) => {
            if (item.id == id) {
              return (
                <>
                  <h1>{item.productName}</h1>
                  <img
                    id="item_image"
                    src={item.image}
                    style={{ width: "600px" }}
                    alt="not working"
                  ></img>
                  <br />
                  <span>Price: {item.price}</span>
                  <p>Description: {item.description}</p>
                </>
              );
            } else <h1>Item Not Found</h1>;
          })}*/}

          <span>your id is : {id}</span>
          <span>your item name is : {data.productName}</span>
        </div>
      </div>
    </>
  );
}
