import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store, Home } from "views";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router basename="/">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/store/:zip" component={Store} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
