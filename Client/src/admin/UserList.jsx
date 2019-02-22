import React, { Component } from "react";
import axios from "axios";
import apr from './../img/aprvimg.jpg';
import rjct from './../img/rejeimg.jpg';



class UserList extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
        UserTyp: "",
        
        tabledta:[{
            FullName: {
                FirstName: "",
                MiddleName: "",
                LastName: ""
              },
              Gender: "",
              DateOfBirth: "",
              Age: "",        // auto calculate
              Address: {
                FlatNumber: "",
                SocietyName: "",
                AreaName: ""
              },
              Email:"",
              City: "",
              State: "",
              Pincode: "",
              PhoneNo: "",                  // should be optional
              MobileNo:"",
              PhysicalDisability: "",                            // optional
              MaritalStatus: "",
              Education: "",
              BirthSign: "",
                            // optional
              isAuthorized:  "" 
        }]
    }

   this.Search();
}

aprvRjctUsr(userObj,str){


    const history= this.props.history;

    let ardta= {
        userObj,
        str
    }

    axios({
        method: "post",
        url: "http://localhost:3000/rejctaprvUsr",
        data: ardta,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(response => {
            // this.setState({ tabledta: response.data.data });
        })
        .catch(function(response) {
            history.push('/error');
        });

        alert("process request successfull...!")

        this.Search();
}

  render() {
    return (

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <h4 class="title">Access Users....</h4>
                                {/* <p class="category">Here is a subtitle for this table</p> */}
                            </div>

                    <div class="content">
                        
                         <div class="row">
                         <div class="col-md-2"></div>
                                 <div class="col-md-4">
                                     <div class="form-group">
                                         {/* <label>Users</label> */}
                                         {/* <input type="text" class="form-control border-input" placeholder="Username"  /> */}
                                         <select class="form-control border-input" value={this.state.UserTyp} onChange={this.onChangeUserTyp.bind(this)} name="UserTyp"> 
                                            <option>Pending</option>
                                            <option>Approved</option>
                                            <option>Rejected</option>
                                            <option>All</option>
                                         </select>
                                     </div>
                                     
                                 </div>
                                 <div class="text-center">
                                        <button type="button" class="btn btn-info btn-fill btn-wd" onClick={this.Search.bind(this)}>Search</button>
                                    </div>
                                 
                             </div>
                          
                          </div>
                         
                
                            <div class="content table-responsive table-full-width">
                                <table class="table table-striped">
                                    <thead>
                                        {/* <th>ID</th> */}
                                        <th>User Id</th>
                                    	<th>Name</th>
                                    	<th>Mobile No</th>
                                    	<th>Email</th>
                                    	<th>City</th>
                                        <td></td>
                                    </thead>
                                    <tbody>

                                    {this.state.tabledta.map((tabledta, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{tabledta.Usr_Id}</td>
                                                <td>{tabledta.FullName.FirstName} {tabledta.FullName.MiddleName} {tabledta.FullName.LastName} </td>
                                                <td>{tabledta.MobileNo} </td>
                                                <td>{tabledta.Email} </td>
                                                <td>{tabledta.City} </td>
                                                <td><td onClick={(e) => this.aprvRjctUsr(tabledta,'aprv')}><img src={apr} /></td><td onClick={(e) => this.aprvRjctUsr(tabledta,'rjct')}><img src={rjct}/></td></td>
                                            </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
      </ul>
        </div>

    )
  }
  onChangeUserTyp(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      Search(){
        const history= this.props.history;
        let srcDta = {
            UserTyp: this.state.UserTyp
        }
        axios({
            method: "get",
            url: "http://localhost:3000/getacesusers",
            data: srcDta,
            config: { headers: { "Content-Type": "multipart/form-data" } }
          })
            .then(response => {
                this.setState({ tabledta: response.data.data });
            })
            .catch(function(response) {
                history.push('/error');
            });
       }      
}
export default UserList;