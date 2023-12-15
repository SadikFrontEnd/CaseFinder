import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { useHistory } from "react-router-dom";

export default function EditAdvocate() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [services, setservices] = useState("");
  const [phone, setphone] = useState("");
  const [category, setcategory] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [city, setCity] = useState("");
    const history = useHistory();

  useEffect(() => {
    
    console.log(history?.location?.data)
    setEmail(history?.location?.data?.email)
    setName(history?.location?.data?.name)
    setservices(history?.location?.data?.services)
    setphone(history?.location?.data?.mobileNo)
    setcategory(history?.location?.data?.category)
    setEnrollment(history?.location?.data?.enrollmentYear)
    setCity(history?.location?.data?.city)
  }, []);

  const handleSumit = (e) => {
    e.preventDefault();
debugger;
const payload = {
    name:name,
    email:Email,
    services:services,
    category:category,
        enrollmentYear:enrollment,
        city:city,
        mobileNo:phone,

}
     axiosConfig
      .put(`/advocate/update-advocate/${history?.location?.data._id}`,payload)
      .then((res) => {
        swal("Success", "Advocate Details Updated");
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
          <h3 className="py-2">Edit Advocate</h3>
        </Col>
        <Col className="m-1">
          <Button
            className=" btn btn-danger float-right "
            onClick={() =>
              history.push("/app/CaseFinder/account/AdvocateList")
            }
          >
            Back
          </Button>
        </Col>
      </Row>
      <div className="container" />
      <Form  onSubmit={handleSumit} >
        <div className="container mt-2">
          <Row className="mb-3 container">
            
            <Col lg="6" md="6" sm="12">
              <Label>Name</Label>
              <Input
              type="text"
              name="name"
              value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label>Phone No</Label>
              <Input
              type="number"
              name="phone"
              value={phone}
                className="form-control"
                onChange={(e) => setphone(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label>Services</Label>
              <Input
              type="text"
              name="services"
              value={services}
                className="form-control"
                onChange={(e) => setservices(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label>Email</Label>
              <Input
              type="email"
              name="Email"
              value={Email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label>City</Label>
              <Input
              type="text"
              name="city"
              value={city}
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
              />
            </Col>
         
            <Col lg="6" md="6" sm="12">
              <Label>Enrollment</Label>
              <Input
              type="number"
              name="enrollment"
              value={enrollment}
                className="form-control"
                onChange={(e) => setEnrollment(e.target.value)}
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label>Category</Label>
              <Input
              type="text"
              name="category"
              value={category}
                className="form-control"
                onChange={(e) => setcategory(e.target.value)}
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
