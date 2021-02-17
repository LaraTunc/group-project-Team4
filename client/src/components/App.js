import React from 'react';

import { BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

import ItemDetails from './ItemDetails';
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

function App() {

  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <ItemGrid />
        </Route>
        <Route path="/product/:productId">
          <ItemDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
