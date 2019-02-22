import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import "./css/login.css";
import LoginApp from "./LoginApp.jsx";
import "./loginSuccess.jsx";
import AdminHome from "./admin/AdmnHome.jsx";
import ErrorComp from "./Error.jsx";
import UserHome from "./user/UserHome.jsx";
import OprtrHome from './operator/OprtrHome.jsx';
//import Test from './testing.jsx'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class LoadComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <Router history={history}>
         
            <Switch>
              <Route exact path="/" component={LoginApp} />
              <Route  path="/admHome" component={AdminHome} />
              <Route  path="/error" component={ErrorComp} />
              <Route path="/usrHome" component={UserHome} />
              <Route path='/oprtrHome' component={OprtrHome}/>
              <Route path='/logout' component={LoginApp} exact/>
              

              
            </Switch>
            
          </Router>
    );
  }

  
}
export default LoadComp;
