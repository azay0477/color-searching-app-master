import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Operations } from "./redux/duck/index";
// import { FilterPage } from "./home/filter-page/filter-page";
import FilterPage from "./home/filter-page/filter-page";
class App extends React.Component {

  componentDidMount(){
    Operations.getAllColors();
  }

  render() {
    return (
      <Router>
        <div className="main-Container bg-white">
          <Switch>
            <Route exact path="/color/search-color" component={FilterPage} />
            <Route path="/">
              <Redirect to="color/search-color" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
