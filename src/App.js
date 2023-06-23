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
              <Link to="/LogIn/" element={<LogIn></LogIn>}>
                LogIn
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Men</li>
            <li>Women</li>
            <li>Contect Us</li>
            <li>
              <i href="/Icon/icons8-shopping-cart-96.png"></i>
            </li>
          </ul>
          <ul>
            <li>
              <i class="fas fa-band-aid"></i>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
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
