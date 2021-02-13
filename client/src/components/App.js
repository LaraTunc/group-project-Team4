import React, { useState, useEffect } from 'react';

import { BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

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
          <div>Mockup Landing page</div>
        </Route>
        <Route exact path="/products">
          <ItemGrid />
        </Route>
        <Route path="/product/:productId">
          <div>Single Item</div>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
