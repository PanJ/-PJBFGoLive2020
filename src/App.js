import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './page/Home';
import { WeddingCeremony } from './page/WeddingCeremony';
import { WeddingReception } from './page/WeddingReception';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/a">
            <WeddingCeremony />
          </Route>
          <Route path="/b">
            <WeddingReception />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
