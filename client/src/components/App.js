import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import ItemGrid from './ItemGrid';

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
        <Route exact path="/products">
          <ItemGrid />
          <div>Item Grid {bacon}</div>
        </Route>
        <Route path="/product/:productId">
          <div>Single Item</div>
        </Route>
        <Route path="/cart">
          <div>Cart</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
