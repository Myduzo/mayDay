import React from "react";
import Posts from "./Posts";
import Home from "./home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
