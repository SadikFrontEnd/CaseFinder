import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Input,
  Label,
  Row,
  CustomInput,
  Col,
  Form,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";

class SubCategoryList extends React.Component {
  static contextType = UserContext;

  state = {
    rowData: [],
    CatList: [],
  };

  async componentDidMount() {
    await axiosConfig
      .get("/advocate/view-advocate")
      .then((response) => {
        this.setState({ rowData: response?.data?.Advocate });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidMount() {
    await axiosConfig
      .get("/court/view-court")
      .then((response) => {
        this.setState({ CatList: response?.data?.Court });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.subcategory) {
      const payload = {
        court: this.state.category,
        subCategoryName: this.state.subcategory,
      };
      axiosConfig
        .post("/court/save-sub-category", payload)
        .then((response) => {
          this.setState({ subcategory: "" });
          swal("Successful!", "You clicked the button!", "success");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal("Fill Both Fields");
    }
  };

  render() {
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col lg="4" md="4" className="">
                <Label>Category *</Label>
                <CustomInput
                  type="select"
                  placeholder="Select Category"
                  name="category"
                  required
                  value={this.state.category}
                  onChange={this.changeHandler}>
                  <option value="none">Select Category</option>
                  {this.state.CatList.map((val) => (
                    <option value={val._id}>{val.name}</option>
                  ))}
                </CustomInput>
              </Col>
              <Col lg="4" md="4" className="">
                <Label>Sub Category *</Label>
                <Input
                  type="text"
                  required
                  name="subcategory"
                  placeholder="SubCategory Name"
                  onChange={this.changeHandler}
                />
              </Col>

              <Col lg="4" md="4" className="mt-1">
                <Button
                  type="submit"
                  onClick={this.handleSubmit}
                  color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default SubCategoryList;
