import React, { Component } from "react";
import "./css/testing.css";
import axios from "axios";
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          UserName: "",
          PassWord: ""
        };
      }
    
  render() {
    return (
      <div className="container">
        <div className="center">
          {/* 
        <button onClick={this.onClickHome}>Home</button> */}

          <h1 className="centerHead">Login Page</h1>

          <form>
            <div className="container">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username" className="form-control" value={this.state.UserName} onChange={this.onChangeUserName.bind(this)}
                name="UserName"
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                type="password" className="form-control" value={this.state.PassWord} onChange={this.onChangePassWord.bind(this)}
                placeholder="Enter Password"
                name="PassWord"
                required
              />
            </div>

            <div className="container back">
              {/* <button type="button" className="cancelbtn">
                Cancel
              </button> */}
              <span>
                <button className="cancelbtn" value="Login" onClick={this.Login.bind(this)}>
                  Login
                </button>
              </span>
              <span>
                <button className="cancelbtn" value="Login" onClick={this.Login.bind(this)}>
                  Register Now
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onChangeUserName(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangePassWord(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  Login(e) {
    const history= this.props.history;
    let user = {
      UserName: this.state.UserName,
      PassWord: this.state.PassWord
    };
    // if(user.UserName === "admin" && user.PassWord === "admin")
    // {
    // }
    // else{

    // }

    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: user,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        console.log(response.data.data.UserType);
        if(response.data.data.UserType === "A")
            history.push('/admHome');
        else if(response.data.data.UserType === "O")
            history.push('/admHome');
        else if(response.data.data.UserType === "U")
            history.push('/admHome');
      })
      .catch(function(response) {
        history.push('/error');
      });
  }
}

export default Test;