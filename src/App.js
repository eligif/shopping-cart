import "./App.css";
import "./Styles/ItemPage.css";
import { useState, createContext } from "react";
import ItemList from "./components/ItemList";
import { v4 as uuidv4 } from "uuid";
import Cart from "./components/Cart";
import logo from "./images/200x200.svg";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Test from "./components/Test";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";
import NoPage from "./components/NoPage";
import NewItem from "./components/NewItem";
import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Items</li>
            <li>Categories</li>
            <li>About</li>
            <li>Partnership</li>
          </ul>
        </nav>
      </header>

      {/*   <main>
        <div>
          <ItemList shoppingFunc={ShoppingList} items={itemList}></ItemList>
          <button onClick={function somem() {}}>Click me!</button>
        </div>
      </main>
      <aside>
        <Cart shoppingList={myShoppingList} totalAmount={shoppingCartAmount} />
  </aside>*/}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
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
