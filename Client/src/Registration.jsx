import React, { Component } from "react";
import "./css/reg.css";

class Registration extends Component {
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
    return (
      <div className="center">
        <form>
          <div>
            <h1>Registere....</h1>
          </div>

          <div>
            <div>
              <label>First Name:</label>
            </div>
            <div >
              <input
                type="text"
                className="form-control"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName.bind(this)}
                name="FirstName"
              />
            </div>
            <div>
              <label>Middle Name:</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.MiddleName}
                onChange={this.onChangeMiddleName.bind(this)}
                name="MiddleName"
              />
            </div>
            <div>
              <label>Last Name:</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.LastName}
                onChange={this.onChangeLastName.bind(this)}
                name="LastName"
              />
            </div>
          </div>

          <div className="form-group">
          <div>
              <label>Gender:</label>
            </div>
            <div>
                <label>Male:</label>
              <input type="radio" name="Gender" value={this.state.Gender} onChange={this.onChangeGender.bind(this)} />
              <label>FeMale:</label>
              <input type="radio" name="Gender" value={this.state.Gender} onChange={this.onChangeGender.bind(this)}/>
              <label>Other:</label>
              <input type="radio" name="Gender" value={this.state.Gender} onChange={this.onChangeGender.bind(this)}/>
            </div>
          </div>

          <div>
            <div>
                <label>Date Of Birth:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.DateOfBirth}
                    onChange={this.onChangeDateOfBirth.bind(this)}
                    name="DateOfBirth"
                />
                </div>
            </div>

          <div>
            <div>
                <label>Age:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.Age}
                    onChange={this.onChangeAge.bind(this)}
                    name="Age"
                />
                </div>
            </div>


        <div>
            <div>
                <label>Address:</label>
                </div>
                {/* <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.UserName}
                    onChange={this.onChangeUserName.bind(this)}
                    name="UserName"
                />
                </div> */}
            </div>

            <div className="form-group">
            <div>
              <label>FlatNumber:</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.FlatNumber}
                onChange={this.onChangeFlatNumber.bind(this)}
                name="FlatNumber"
              />
            </div>
            <div>
              <label>SocietyName:</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.SocietyName}
                onChange={this.onChangeSocietyName.bind(this)}
                name="SocietyName"
              />
            </div>
            <div>
              <label>AreaName:</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.AreaName}
                onChange={this.onChangeAreaName.bind(this)}
                name="AreaName"
              />
            </div>
          </div>

          <div>
            <div>
                <label>Email:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.Email}
                    onChange={this.onChangeEmail.bind(this)}
                    name="Email"
                />
                </div>
            </div>

            <div>
            <div>
                <label>City:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.City}
                    onChange={this.onChangeCity.bind(this)}
                    name="City"
                />
                </div>
            </div>

            <div>
            <div>
                <label>State:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.State}
                    onChange={this.onChangeState.bind(this)}
                    name="State"
                />
                </div>
            </div>

            <div>
            <div>
                <label>PinCode:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.Pincode}
                    onChange={this.onChangePincode.bind(this)}
                    name="Pincode"
                />
                </div>
            </div>

            <div>
            <div>
                <label>Phone No:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.PhoneNo}
                    onChange={this.onChangePhoneNo.bind(this)}
                    name="PhoneNo"
                />
                </div>
            </div>

            <div>
            <div>
                <label>Mobile No:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.MobileNo}
                    onChange={this.onChangeMobileNo.bind(this)}
                    name="MobileNo"
                />
                </div>
            </div>

            <div className="form-group">
              <div>
              <label>Physical Disability:</label>
            </div>
            <div>
                <label>Yes:</label>
              <input type="radio" name="PhysicalDisability"  value={this.state.PhysicalDisability} onChange={this.onChangePhysicalDisability.bind(this)}/>
              <label>No:</label>
              <input type="radio" name="PhysicalDisability" value={this.state.PhysicalDisability} onChange={this.onChangePhysicalDisability.bind(this)}/>
            </div>
          </div>

          <div>
            <div>
                <label>Marital Status:</label>
                </div>
                <div>
                <label>Maried:</label>
              <input type="radio" name="MaritalStatus"  value={this.state.MaritalStatus} onChange={this.onChangeMaritalStatus.bind(this)}/>
              <label>UnMaried:</label>
              <input type="radio" name="MaritalStatus"  value={this.state.MaritalStatus} onChange={this.onChangeMaritalStatus.bind(this)}/>
                </div>
            </div>

            <div>
            <div>
                <label>Education:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.Education}
                    onChange={this.onChangeEducation.bind(this)}
                    name="Education"
                />
                </div>
            </div>

            <div>
            <div>
                <label>Birth Sign:</label>
                </div>
                <div>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.BirthSign}
                    onChange={this.onChangeBirthSign.bind(this)}
                    name="BirthSign"
                />
                </div>
            </div>



 

            

          <div>
            <input
              type="button"
              value="Save"
              onClick={this.Save.bind(this)}
            />
          </div>
        </form>
      </div>
    );
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
    // alert(regdta.Gender);
    // alert(regdta.DateOfBirth);
    // alert(regdta.Age);
    // alert(regdta.FlatNumber);
    // alert(regdta.SocietyName);
    // alert(regdta.AreaName);
    // alert(regdta.Email);
    // alert(regdta.City);
    // alert(regdta.State);
    // alert(regdta.Pincode);
    // alert(regdta.PhoneNo);
    // alert(regdta.MobileNo);
    // alert(regdta.PhysicalDisability);
    // alert(regdta.MaritalStatus);
    // alert(regdta.Education);
    // alert(regdta.BirthSign);

  }
}
export default Registration;
