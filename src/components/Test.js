import React from "react";
import { Route, Link, Routes } from "react-router-dom";

export default function Test() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/Product"}>Product</Link>
        </li>
      </ul>
      <div className="test"></div>

      <Routes>
        <Route path="/Product"></Route>
      </Routes>
    </div>
  );
}
