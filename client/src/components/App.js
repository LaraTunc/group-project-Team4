import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ItemDetails from './ItemDetails';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>Homepage {bacon}</div>
        </Route>
        <Route path="/products">
          <div>Item Grid</div>
        </Route>
        <Route path="/product/:productId">
          <ItemDetails />
        </Route>
        <Route path="/cart">
          <div>Cart</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
