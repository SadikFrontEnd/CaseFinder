import React from "react";
import { Link } from 'react-router-dom';

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

class Advocateform extends React.Component {
    static contextType = UserContext;

    state = {
        rowData: [],
        Court: [],
        CourtName:"",
        name:[],
        Viewpermisson: null,
        Editpermisson: null,
        Createpermisson: null,
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
        await axiosConfig
        .get("/court/view-court")
        .then((response) => {
          console.log(response.data);
          this.setState({ Court: response?.data?.Court });
        })
        .catch((error) => {
          console.log(error);
        });
   



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
                    axiosConfig.post(`/userdelete`, formData).then((response) => { });
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


    handleCourt = ()=>{
        if (this.state.CourtName.length>0){
            const payload= {
                name: this.state.CourtName
        }
        axiosConfig
        .post("/court/save-court", payload)
        .then((response) => {
          console.log(response);
          swal("Successful!", "Court Add Successfully", "success");
      
        })
        .catch((error) => {
          console.log(error);
        });
        }
      
      }
    





      changeHandler= (e)=>{
         console.log(e.target.value)
        let {name,value}=e.target
        this.setState({[name]:value})
      }



    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        debugger;
        const payload= {
                 name: this.state.name,
                 mobileNo:this.state.phoneNo,
                 email:this.state.email,
                 services:this.state.services,
                 enrollmentYear:this.state.enrollment,
                 city:this.state.city,
                 category:this.state.category,




         }
         axiosConfig
         .post("/advocate/save-advocate", payload)
         .then((response) => {
           console.log(response);
           swal("Successful!", "You clicked the button!", "success");
         //   this.props.history.push("/advocate/save-advocate");
         })
         .catch((error) => {
           console.log(error);
         });
       }
    render() {
        const { rowData, columnDefs, defaultColDef } = this.state;
        return (
            <>
                <div >
                <div className='row'>
                <div className='col-sm-10 col-md-10 col-xl-10 col-lg-10'>
                <h1 className='mb-3'>Advocate</h1>
                </div>
                <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                <Link to="/app/Trupee/account/Advocate"><button type="button" className="btn btn-danger ml-1">Back</button></Link>
                               
                </div>
                </div>
                    
                 <form onSubmit={this.handleSubmit}>
                <div className='row mb-3'>
                <div className='col-sm-8 col-md-8 col-xl-8 col-lg-8'>
                <label className="form-label ">Court</label>
                <input type="text" className="form-control" placeholder='Enter Court Name' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>this.setState({CourtName:e.target.value})}/>
           
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-1'>
                <button type="button"  onClick={this.handleCourt} className="btn btn-primary ml-1">Add Court</button>

                 </div>
                </div>
                    <div className='row'>
                        
                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                            
                                <div className="mb-1">
                                    <label for="exampleInputEmail1" className="form-label" >Name</label>
                                    <input type="text" className="form-control" placeholder='Name' name='name' id="exampleInputEmail1" aria-describedby="emailHelp"    onChange={this.changeHandler}/>
                               
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                <div className="mb-1">
                                    <label className="form-label">Phone No.</label>
                                    <input type="number" className="form-control" placeholder='Phone No.' name='phoneNo'    onChange={this.changeHandler} />
                                </div>
                                </div>
                                </div>
                                <div className='row'>
                        
                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                <div className="mb-1">
                                    <label className="form-label">Email Id</label>
                                    <input type="email" className="form-control" placeholder='Email Id'   onChange={this.changeHandler} name='email'aria-describedby="emailHelp" />
                                </div>
                                
                                        </div>
                                       
                                    
                          <div className='col-sm-6 col-md-6 col-xl-6 col-lg-6'>
                                    <label className="form-label">Services</label>
                                    <input type="text" className="form-control " placeholder='Services'  name='services'     onChange={this.changeHandler}/>
    
                                
                                </div>
                                        

                                </div>
                                <div className="mb-1">
                                <div className='row'>
                                <div className='col-sm-6 col-md-6 col-xl-6 col-lg-6'>
                                <label  className="form-label">Enrollment Year</label>
                                <input type="number" className="form-control " placeholder='Enrollment Year' id="exampleInputEmail1" name='enrollment'   onChange={this.changeHandler} />

                            </div>
                           
                        
                            <div className='col-sm-6 col-md-6 col-xl-6 col-lg-6'>
                                <label className="form-label">City</label>
                                <input type="text" className="form-control " placeholder='City'  name='city'   onChange={this.changeHandler} />

                            
                            </div>
                                </div>


                                    <div className='row mt-2   '>
                                    <Col lg="6" md="6" className="mb-2">
                                    <Label>Category</Label>
                                    <CustomInput
                                      type="select"
                                      placeholder="Select Category"
                                      name="category"
                                      value={this.state.category}
                                      onChange={this.changeHandler}
                                    >
                                     <option>Select Category</option>
                                     {this.state.Court && this.state.Court?.map((e,i) => (
                                        <option value={e?.name} key={i}>
                                          {e?.name}
                                        </option>
                                      ))}
                                    
                                    </CustomInput>
                                  </Col>
                                        
                                       
                                    </div>

                                </div>
                              

                        <div className='text-center'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                   
                                    </div>
                            
                        </form>


                </div>
            </>
        );
    }
}
export default Advocateform;
