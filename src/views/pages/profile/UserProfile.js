import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import axios from "axios";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
// import { Route } from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cnfmPassword: "",
      password: "",
      role: "",
      gstinno: "",
      adminimg: "",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };

  async componentDidMount() {
    // let { id } = this.props.match.params;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    this.setState({
      name: res?.data?.data?.full_name,
      email: res?.data?.data?.email,
      mobile: res?.data?.data?.mobile,
      password: res?.data?.data?.password,
      cnfmPassword: res?.data?.data?.password,
      gstinno: res?.data?.data?.gstin_no,
      role: res?.data?.data?.role,
    });
    // console.log(pageparmission?.Userinfo);
    let formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    await axiosConfig
      .post(`/usereditview`, formdata)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          name: res?.data?.data?.full_name,
          email: res?.data?.data?.email,
          mobile: res?.data?.data?.mobile,
          password: res?.data?.data?.password,
          cnfmPassword: res?.data?.data?.password,
          gstinno: res?.data?.data?.gstin_no,
          role: res?.data?.data?.role,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    debugger;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log(pageparmission?.Userinfo?.id);
    const data = new FormData();
    data.append("id", pageparmission?.Userinfo?.id);
    data.append("full_name", this.state.name);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gstin_no", this.state.gstinno);
    data.append("password", this.state.password);
    data.append("status", "Active");
    // data.append("cnfmPassword", this.state.cnfmPassword);
    if (this.state.selectedFile !== null) {
      data.append("adminimg", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }

    axiosConfig
      .post(`/usereditsubmit`, data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFully!", "Success");
        // window.location.reload("/#/pages/profile");
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            {/* <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={this.state.data.adminimg}
                    alt="adminimg"
                    className="img-fluid img-border rounded-circle box-shadow-1"
                    width="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name: <span className="lst-3">{this.state.name}</span>
                    </li>
                    <li className="lst-2">
                      Email: <span className="lst-3">{this.state.email}</span>
                    </li>
                    <li className="lst-2">
                      Role: <span className="lst-3">{this.state.role}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col> */}
            <Col
              sm="12"
              xl="12"
              lg="12"
              md="12"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col sm="12" className="p-0">
                        <Form action="/">
                          <Label>UserName</Label>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                          />
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />
                          <Label>Gstin No</Label>
                          <Input
                            type="text"
                            name="gstinno"
                            placeholder="Enter Gstin No."
                            value={this.state.gstinno}
                            onChange={this.changeHandler}
                          />
                          <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                          />
                          <Label>Confirm Password</Label>
                          <Input
                            type="password"
                            name="cnfmPassword"
                            placeholder="Reset password"
                            value={this.state.cnfmPassword}
                            onChange={this.changeHandler}
                          />
                          {/* <Label>User Image</Label>
                          <Input
                            className="form-control"
                            type="file"
                            name="adminimg"
                            onChange={this.onChangeHandler}
                          /> */}
                          <CheckBoxesVuexy
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=" I accept the terms & conditions."
                            defaultChecked={true}
                          />
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" type="submit">
                              Submit
                            </Button.Ripple>
                          </div>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;
