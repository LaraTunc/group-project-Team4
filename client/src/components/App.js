import React, { useState, useEffect } from 'react';

import { BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

import ItemDetails from './ItemDetails';
import Homepage from './Homepage';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Switch>
        <Route exact path="/">
          <Homepage />
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
