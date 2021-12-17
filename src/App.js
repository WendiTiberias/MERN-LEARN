import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CRUD from "./component/CRUD";
import Forms from "./component/Form";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Combine from "./state/All";

const store = createStore(Combine, applyMiddleware(thunk));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <CRUD />
            </Route>
            <Route path="/create">
              <Forms />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
