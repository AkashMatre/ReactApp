import React, { Component } from "react";
import AdmService from "./AdmService.jsx";
import axios from "axios";


class CrtUserRole extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        Role: "",
        Name: "",
        MobNum: "",
        Email: "",
        
      }
    }
  
    render() {
        return(
          <div class="col-lg-8 col-md-7">
          <div class="card">
             <div class="header">
                 <h4 class="title">Create System User</h4>
             </div>
             <div class="content">
                 <form>
                         <div class="row">
                         <div class="col-md-2"></div>
                                 <div class="col-md-4">
                                     <div class="form-group">
                                         <label>Role</label>
                                         {/* <input type="text" class="form-control border-input" placeholder="Username"  /> */}
                                         <select class="form-control border-input" value={this.state.Role} onChange={this.onChangeRole.bind(this)} name="Role"> 
                                            <option>Select</option>
                                            <option>Operator</option>
                                            <option>Access User</option>
                                            <option>Admin</option>
                                         </select>
                                     </div>
                                 </div>
                                 <div class="col-md-4">
                                     <div class="form-group">
                                         <label for="exampleInputEmail1">Name</label>
                                         <input type="text" class="form-control border-input" value={this.state.Name} onChange={this.onChangeName.bind(this)} name="Name" />
                                     </div>
                                 </div>
                             </div>
                             <div class="row">
                         <div class="col-md-2"></div>
                         <div class="col-md-4">
                                     <div class="form-group">
                                         <label for="exampleInputEmail1">Mobile No</label>
                                         <input type="text" class="form-control border-input"  value={this.state.MobNum} onChange={this.onChangeMobNum.bind(this)} name="MobNum"/>
                                     </div>
                                 </div>
                                 <div class="col-md-4">
                                     <div class="form-group">
                                         <label for="exampleInputEmail1">Email-Id</label>
                                         <input type="text" class="form-control border-input"  value={this.state.Email} onChange={this.onChangeEmail.bind(this)} name="Email"/>
                                     </div>
                                 </div>
                             </div>
                             <div class="text-center">
                                <button type="button" class="btn btn-info btn-fill btn-wd" onClick={this.CreatUsr.bind(this)}>Create</button>
                            </div>
                </form>
              </div>
            </div>
          </div>      
        )
    }


    onChangeRole(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onChangeName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onChangeMobNum(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onChangeEmail(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      
    CreatUsr(e)
    {
      const history= this.props.history;
        
        let UsrDta = {
        
            Role: this.state.Role,
            Name: this.state.Name,
            MobNum: this.state.MobNum,
            Email: this.state.Email,
        }

        // alert(UsrDta.Role);
        // alert(UsrDta.Name);
        // alert(UsrDta.MobNum);
        // alert(UsrDta.Email);
        
        axios({
            method: "post",
            url: "http://localhost:3000/userrolecrt",
            data: UsrDta,
            config: { headers: { "Content-Type": "multipart/form-data" } }
          })
            .then(function(response) {

              alert("User created Successfully....!");
              
              
            })
            .catch(function(response) {
                history.push('/error');
            });
      

        

    }
}

export default CrtUserRole;