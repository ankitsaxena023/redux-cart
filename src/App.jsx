import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

//react-redux - Provider - wraps app, connect - used in components
import { Provider } from "react-redux";

//initial store
const initialStore = {
  cart: cartItems,
  amount: 5,
  total: 105,
};

const store = legacy_createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
