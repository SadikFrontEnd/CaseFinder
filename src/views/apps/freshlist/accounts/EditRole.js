import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { Route, Link } from "react-router-dom";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export default function AddRoleNew({props}) {
  const [pdfName, setPdfName] = useState("");
  const [SelectedFile, setSelectedFile] = useState({});
    const history = useHistory();

  useEffect(() => {
   setPdfName(history?.location?.data?.pdfName)
  }, []);

     const handleFile = (e)=>{
  console.log(e.target.files[0]) 
  debugger;
  setSelectedFile(e.target.files[0])
  }

  const handleSumit = (e) => {
    e.preventDefault();
// const id= JSON.parse(localStorage.getItem(PDFID))
// console.log(id)
    const formdata = new FormData();
    formdata.append("pdfName", pdfName);
    if (SelectedFile !== null) {
      formdata.append("pdf", SelectedFile);
    }

     axiosConfig
      .put(`/pdf/update-pdf-upload/${history?.location?.data?._id}`,formdata)
      .then((res) => {
        console.log(res);
        swal("Success", "PDF File Updated");
      })
      .catch((er) => {
        console.log(er);
      });
  };
 
  return (
  <>
  <Row className="">
  <Col xl={12}>
    <Card>
      <Row>
        <Col className="m-1">
          <h3 className="py-2">Update PDF  </h3>
        </Col>
        <Col className="m-1">
          <Button
            className=" btn btn-danger float-right "
            onClick={() =>
              history.push("/app/Trupee/account/RoleList")
            }
          >
            Back
          </Button>
        </Col>
      </Row>
      <div className="container" />
      <Form onSubmit={handleSumit}>
        <div className="container mt-2">
          <Row className="mb-3 container">
            <Col>
              <Label>PDF Name</Label>
              <Input
              type="text"
               value={pdfName}
               name="pdfName"
                onChange={(e) => setPdfName(e.target.value)}
                placeholder="Enter PDF Name"
                className="form-control"
              />
            </Col>
            <Col>
              <Label>PDF File</Label>
              <Input
              type="file"
                onChange={(e) => handleFile(e)}
                className="form-control"
              />
            </Col>
          </Row>
        </div>
        <div className="mb-3 ">
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>
       </Form>
    </Card>
  </Col>
</Row>
  </>
  );
}
