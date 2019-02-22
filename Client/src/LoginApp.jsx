import React, { Component } from "react";
import axios from "axios";



class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      PassWord: ""
    };
  }

  render() {
    return (
    <div className="center">
        <form>
          <div>
            <h1>Login....</h1>
          </div>
          <div className="form-group">
            <label>UserName:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.UserName}
              onChange={this.onChangeUserName.bind(this)}
              name="UserName"
            />
          </div>
          <div className="form-group">
            <label>PassWord:</label>
            <input
              type="PassWord"
              className="form-control"
              value={this.state.PassWord}
              onChange={this.onChangePassWord.bind(this)}
              name="PassWord"
            />
          </div>

          <div>
            <input
              type="button"
              value="Login"
              onClick={this.Login.bind(this)}
            />
          </div>
        </form>
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
        {
          sessionStorage.setItem("usrid",response.data.data.Usr_Id);
          history.push('/admHome');
        }
        else if(response.data.data.UserType === "O")
        {
          sessionStorage.setItem("usrid",response.data.data.Usr_Id);
          history.push('/oprtrHome');
        }   
        else if(response.data.data.UserType === "U" && response.data.data.isAuthorized === "A")
        {
          sessionStorage.setItem("usrid",response.data.data.Usr_Id);
          history.push('/usrHome');
        }
           
      })
      .catch(function(response) {
          history.push('/error');
      });
  }
}
export default LoginApp;
