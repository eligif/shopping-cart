import "./App.css";
import "./Styles/ItemPage.css";
import "./Styles/LogIn.css";

import { useState, createContext } from "react";
import ItemList from "./components/ItemList";
import { v4 as uuidv4 } from "uuid";
import Cart from "./components/Cart";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";
import NoPage from "./components/NoPage";
import NewItem from "./components/NewItem";
import HomeLayout from "./components/HomeLayout";
import LogIn from "./components/Login";
import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li id="li_login">
              <Link id="li_login_link" to="/LogIn/" element={<LogIn></LogIn>}>
                LogIn
              </Link>
            </li>
            <li>
              <Link id="li_Home_link" to="/">
                <img
                  id="logo_image_center"
                  src="https://imgtr.ee/images/2023/06/25/dr4n1.png"
                ></img>
              </Link>
            </li>
            <li id="cart_icon">
              <Link to="/ShoppingCart" element={<Cart></Cart>}>
                <img src="https://imgtr.ee/images/2023/06/25/drvYR.png"></img>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
        <Route path="/ShoppingCart" element={<Cart></Cart>}></Route>
        <Route path="/ItemPage/" element={<ItemPage></ItemPage>}>
          <Route path=":id"></Route>
          <Route path=":name"></Route>
          <Route path="new" element={<NewItem></NewItem>}></Route>
        </Route>

        <Route path="*" element={<NoPage></NoPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
