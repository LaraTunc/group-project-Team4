import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Item Grid {bacon}</div>
        </Route>
        <Route path="/product/:productId">
          <div>Single Item</div>
        </Route>
        <Route path="/order">
          <div>order</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
