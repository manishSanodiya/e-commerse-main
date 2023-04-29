import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Header from "../components/header/Header";
import Generic2 from "../components/header/Generic2";

const Contadt = () => {
  const submitHandler = (e) => {
     e.preventDefault();
    const cDetail = {
      Name: document.getElementById("formGridAddress1").value,
      Phoneno: document.getElementById("formGridAddress2").value,
      emailId: document.getElementById("formGridEmail").value,
    };
    fetch("https://react-http-795dc-default-rtdb.firebaseio.com/e-comerse.json", {
      method: "POST",
      body: JSON.stringify(cDetail),
      headers: {
        "Content-Type": "Application/json",
      },
    });
  };
  return (
    <div>
        <Header/>
        <Generic2/>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="John doe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone no</Form.Label>
          <Form.Control type="number" placeholder="212366558" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Generic2/>
    </div>
  );
};

export default Contadt;
