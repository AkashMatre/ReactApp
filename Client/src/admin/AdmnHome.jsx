import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LoginApp from "../LoginApp.jsx";
import UserList from './UserList.jsx';
import UserRegstrtn from './../UserRegstrtn.jsx';
import logo from './../img/hglogo.png';
import CrtUserRole from './crtUserRol';
import Registration from "./../Registration.jsx";


class AdminHome extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
    <Router>
      <div class="wrapper">
      <div class="sidebar" data-background-color="white" data-active-color="danger">
        <div class="sidebar-wrapper">
              <div class="logo">
                  {/* <a href="http://www.creative-tim.com" class="simple-text">
                      Harbinger Group
                  </a> */}
                  <img src={logo} />
              </div>
              <ul class="nav">
                  <li class="active">
                      <a>
                          <p>
                        <Link to="/usrList" >Access Users </Link>
                        </p>
                          {/* <p> Access Users</p> */}
                      </a>
                  </li>
                  <li>
                      <a>
                        <p>
                            <Link to="/crtUser" >Create User </Link>
                        </p>
                        </a>
                  </li>
                  <li>
                      <a>
                        <p>
                            <Link to="/crtRole" >Create Role </Link>
                        </p>
                        </a>
                  </li>
              </ul>
        </div>
      </div>
  
      <div class="main-panel">
          <nav class="navbar navbar-default">
              <div class="container-fluid">
                  <div class="navbar-header">
                      {/* <button type="button" class="navbar-toggle">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar bar1"></span>
                          <span class="icon-bar bar2"></span>
                          <span class="icon-bar bar3"></span>
                      </button> */}
                      <a class="navbar-brand" href="#">Welcome... </a>
                  </div>
  
                  <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right">
                      <li>
                          <a href="#">
                              <i class="ti-settings"></i>
                              <p>Log Out</p>
                          </a>
                      </li>
                  </ul>
                  </div>
              </div>
          </nav>
      
         
          <div className="content">
          
          
              <Switch>
                <Route  path ='/usrList' component= {UserList} />
                <Route  path ='/crtUser' component= {UserRegstrtn} />
                <Route  path ='/crtRole' component= {CrtUserRole} />
              </Switch>
            
          </div>
          
         
  
          {/* <footer className="footer">
              <div className="container-fluid">
                  <nav class="pull-left">
                      
                  </nav>
                  <div class="copyright pull-right">
                      footer
                  </div>
              </div>
          </footer> */}
  
      </div>
  </div>
  </Router>
    );
  }

  OnclkAcsUsr()
  {
    const history= this.props.history;

    history.push('/error');
   // alert("test");
  }
  
}

export default AdminHome;
