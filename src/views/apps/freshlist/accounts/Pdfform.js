import React from "react";
import {  Link } from 'react-router-dom';

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
import storage from "../firebase";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";

class Pdfform extends React.Component {
  static contextType = UserContext;

  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    progress1:"",
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
      },
      {
        headerName: "Role Name",
        field: "Name",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* {this.state.Viewpermisson && (
                <BsEye
                  className="mr-50"
                  size="25px"
                  color="green"
                  onClick={() =>
                    history.push(
                      `/app/freshlist/account/updateexistingrole/${params.data.id}`
                    )
                  }
                />
              )} */}

              {this.state.Editpermisson && (
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push({
                          pathname: `/app/freshlist/account/editRole/${params?.data}`,
                          data: params,
                        })
                      }
                    />
                  )}
                />
              )}
              {/* {this.state.Deletepermisson && (
                <BsTrash
                  className="mr-50"
                  size="25px"
                  color="red"
                  onClick={() => {
                    this.runthisfunction(params.data.id);
                  }}
                />
              )} */}
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Role List"
    );

    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
    this.setState({
      Createpermisson: newparmisson?.permission.includes("Create"),
    });
    this.setState({
      Editpermisson: newparmisson?.permission.includes("Edit"),
    });
    this.setState({
      Deletepermisson: newparmisson?.permission.includes("Delete"),
    });

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getrolelist", formdata)
      .then((response) => {
        // console.log(response.data?.data);
        const propertyNames = Object.values(response.data?.data);
        // console.log(propertyNames);
        this.setState({ rowData: propertyNames });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

   uploadImage = (x) => {
    if (x !== "") {
      const uploadTask = storage.ref(`images/${x.name}`).put(x);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress1(
            Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(x.name)
            .getDownloadURL()
            .then((url) => {
              setProgress1(0);

              setPostData({ ...postData, pdf: url });
            });
        }
      );
    } else {
      alert("No File selected");
    }
  };
    
  runthisfunction(id) {
    // console.log(id);
    let selectedData = this.gridApi.getSelectedRows();
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          const formData = new FormData();
          formData.append("user_id", id);
          this.gridApi.updateRowData({ remove: selectedData });
          axiosConfig.post(`/userdelete`, formData).then((response) => {});
          break;
        default:
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
    onChangeHandler = (event) => {
      console.log(event.target.files[0])
      this.uploadImage(e.target.files[0])
      this.setState({ selectedFile: event.target.files[0] });
      this.setState({ selectedName: event.target.files[0].name });
      console.log(event.target.files[0]);
    };

    changeHandler = (e) => {
      console.log(e.target.value)
      this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
      e.preventDefault();
      const data = new FormData();
      debugger;
      data.append("pdfName", this.state.PDFName);
    if (this.state.selectedFile !== null) {
          data.append("pdf", this.state.selectedFile);
        }
    

      axiosConfig
        .post("/pdf/upload-pdf", data)
        .then((response) => {
          console.log(response);
          swal("Successful!", "You clicked the button!", "success");
          // this.props.history.push("/app/Trupee/account/RoleList");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <>
      <div >
      <div className='row'>
      <div className='col-sm-10 col-md-10 col-xl-10 col-lg-10'>
      <h1 className='mb-5'>Add PDF</h1>
      </div>
      <div className='col-sm-2 col-md-2 col-xl-2 col-lg-2 '>
      <Link to="/app/Trupee/account/RoleList"><button type="button" className="btn  btn-danger  ">Back</button></Link>
      </div>
      </div>
      
             
      <form onSubmit={this.submitHandler}>
      <div className='row'>
      <div className='col-sm-5 col-md-5 col-lg-5 col-xl-5'>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label ">PDF Name</label>
    <input type="text" className="form-control w-75" name="PDFName" placeholder='Pdf Name' aria-describedby="emailHelp"
     onChange={this.changeHandler}
  
     
     />
    
  </div>
  </div>
  <div className='col-sm-5 col-md-5 col-lg-5 col-xl-5'>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">PDF Upload</label>
    <input type="file" className="form-control w-75" id="exampleInputPassword1"    onChange={this.onChangeHandler}/>
    <div
    style={{
      height: 3,
      width: "100%",
      backgroundColor: "lightgrey",
    }}
  >
    <div
      style={{
        height: 3,
        width: `${progress1}%`,
        backgroundColor: "green",
      }}
    ></div>
  </div>
  </div>
  </div>
  <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
  <div className="mb-3 ">
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
  </div>
  </div>
  </div>                
</form>
      </div>
      </>
    );
  }
}
export default Pdfform;
