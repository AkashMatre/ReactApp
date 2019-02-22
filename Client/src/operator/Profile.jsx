import React, { Component } from "react";
import axios from "axios";



class OprtrProfile extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          PersonalID: 0,
          FirstName: "",
          MiddleName: "",
          LastName: "",
          Gender: "",
          DateOfBirth: "",
          Age: "",
          FlatNumber: "",
          SocietyName: "",
          AreaName: "",
          Email: "",
          City: "",
          State: "",
          Pincode: "",
          PhoneNo: "",
          MobileNo: "",
          PhysicalDisability: "",
          MaritalStatus: "",
          Education: "",
          BirthSign: "",
          isAuthorized: ""
        };
      }
  
    render() {
        return(
            <div class="col-lg-8 col-md-7">
                 <div class="card">
                    <div class="header">
                        <h4 class="title">Profile</h4>
                    </div>
                    <div class="content">
                        <form>
                                <div class="row">
                                
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>First Name</label>
                                                <input type="text" class="form-control border-input"  value={this.state.FirstName} onChange={this.onChangeFirstName.bind(this)} name="FirstName" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Middle Name</label>
                                                <input type="text" class="form-control border-input" value={this.state.MiddleName} onChange={this.onChangeMiddleName.bind(this)} name="MiddleName" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Last Name</label>
                                                <input type="text" class="form-control border-input" value={this.state.LastName} onChange={this.onChangeLastName.bind(this)} name="LastName" />
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control border-input" value={this.state.Email} onChange={this.onChangeEmail.bind(this)} name="Email" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Mobile No</label>
                                                <input type="text" class="form-control border-input"  value={this.state.MobileNo} onChange={this.onChangeMobileNo.bind(this)} name="MobileNo" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Phone No</label>
                                                <input type="text" class="form-control border-input" value={this.state.PhoneNo} onChange={this.onChangePhoneNo.bind(this)} name="PhoneNo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                       <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Gender</label>
                                                <div>
                                                    <label>Male:</label>
                                                    <input type="radio" name="Gender" checked={this.state.Gender === "Male"} value="Male" onChange={this.onChangeGender.bind(this)} />
                                                    <label>FeMale:</label>
                                                    <input type="radio" name="Gender" checked={this.state.Gender === "Female"} value="Female" onChange={this.onChangeGender.bind(this)}/>
                                                    <label>Other:</label>
                                                    <input type="radio" name="Gender" checked={this.state.Gender === "Other"} value="Other" onChange={this.onChangeGender.bind(this)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Marital Status</label>
                                                 <div>
                                                    <label>Maried:</label>
                                                    <input type="radio" name="MaritalStatus"  value={this.state.MaritalStatus} onChange={this.onChangeMaritalStatus.bind(this)}/>
                                                    <label>UnMaried:</label>
                                                    <input type="radio" name="MaritalStatus"  value={this.state.MaritalStatus} onChange={this.onChangeMaritalStatus.bind(this)}/>
                                                 </div>
                                                </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Physical Disability</label>

                                                <div>
                                                     <label>Yes:</label>
                                                     <input type="radio" name="PhysicalDisability"  value={this.state.PhysicalDisability} onChange={this.onChangePhysicalDisability.bind(this)}/>
                                                     <label>No:</label>
                                                     <input type="radio" name="PhysicalDisability" value={this.state.PhysicalDisability} onChange={this.onChangePhysicalDisability.bind(this)}/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Date Of Birth</label>
                                                <input type="text" class="form-control border-input" value={this.state.DateOfBirth} onChange={this.onChangeDateOfBirth.bind(this)} name="DateOfBirth" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Age</label>
                                                <input type="text" class="form-control border-input" value={this.state.Age} onChange={this.onChangeAge.bind(this)} name="Age" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Birth Sign</label>
                                                <input type="text" class="form-control border-input" value={this.state.BirthSign} onChange={this.onChangeBirthSign.bind(this)} name="BirthSign" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Flat Number</label>
                                                <input type="text" class="form-control border-input" value={this.state.FlatNumber} onChange={this.onChangeFlatNumber.bind(this)} name="FlatNumber" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Society Name</label>
                                                <input type="text" class="form-control border-input" value={this.state.SocietyName} onChange={this.onChangeSocietyName.bind(this)} name="SocietyName" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Area Name</label>
                                                <input type="text" class="form-control border-input" value={this.state.AreaName} onChange={this.onChangeAreaName.bind(this)} name="AreaName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="text" class="form-control border-input" value={this.state.City} onChange={this.onChangeCity.bind(this)} name="City" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>PinCode</label>
                                                <input type="text" class="form-control border-input"  value={this.state.Pincode} onChange={this.onChangePincode.bind(this)} name="Pincode" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>State</label>
                                                <input type="text" class="form-control border-input" value={this.state.State} onChange={this.onChangeState.bind(this)} name="State" />
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="row">
                                        
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Education</label>
                                                <input type="text" class="form-control border-input" value={this.state.Education} onChange={this.onChangeEducation.bind(this)} name="Education" />
                                            </div>
                                        </div>
                                    </div>
                                   


                                   
                                    <div class="text-center">
                                        <button type="button" class="btn btn-info btn-fill btn-wd" onClick={this.Save.bind(this)}>Save</button>
                                    </div>
                                    <div class="clearfix"></div>
                                    
                        </form>
                    </div>
                 </div>
            </div>
                


        )
    }
    onChangeFirstName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onChangeMiddleName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeLastName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeGender(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeDateOfBirth(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeAge(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeFlatNumber(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeSocietyName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeAreaName(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeEmail(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeCity(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeState(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangePincode(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangePhoneNo(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeMobileNo(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangePhysicalDisability(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeMaritalStatus(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeEducation(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
     onChangeBirthSign(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      
    
    
      Save(e) {
        const history= this.props.history;

       
        let regdta = {
        
          FirstName: this.state.FirstName,
          MiddleName: this.state.MiddleName,
          LastName: this.state.LastName,
          Gender: this.state.Gender,
          DateOfBirth: this.state.DateOfBirth,
          Age: this.state.Age,
          FlatNumber: this.state.FlatNumber,
          SocietyName: this.state.SocietyName,
          AreaName: this.state.AreaName,
          Email: this.state.Email,
          City: this.state.City,
          State: this.state.State,
          Pincode: this.state.Pincode,
          PhoneNo: this.state.PhoneNo,
          MobileNo: this.state.MobileNo,
          PhysicalDisability: this.state.PhysicalDisability,
          MaritalStatus: this.state.MaritalStatus,
          Education: this.state.Education,
          BirthSign: this.state.BirthSign,
          isAuthorized: this.state.isAuthorized
        };
        // alert(regdta.FirstName);
        // alert(regdta.MiddleName);
        // alert(regdta.LastName);
        // alert(regdta.Email);
        // alert(regdta.MobileNo);
        // alert(regdta.PhoneNo);

        // alert(regdta.Gender);
        // alert(regdta.MaritalStatus);
        // alert(regdta.PhysicalDisability);
        // alert(regdta.DateOfBirth);
        // alert(regdta.Age);
        // alert(regdta.BirthSign);
      
        
        // alert(regdta.FlatNumber);
        // alert(regdta.SocietyName);
        // alert(regdta.AreaName);
        
        // alert(regdta.City);
        // alert(regdta.Pincode);
        // alert(regdta.State);
       
       
      
        
        
        // alert(regdta.Education);

        axios({
            method: "post",
            url: "http://localhost:3000/reg",
            data: regdta,
            config: { headers: { "Content-Type": "multipart/form-data" } }
          })
            .then(function(response) {

                alert("User Register Successfuly.....!");
              
            })
            .catch(function(response) {
                history.push('/error');
            });
        
    
    
    }
}
export default OprtrProfile;
