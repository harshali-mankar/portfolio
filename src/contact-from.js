import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
  const SERVICE_ID = "service_i22eil7";
  const TEMPLATE_ID = "template_2v7h5ds";
  const PUBLIC_KEY = "Z1m-Rmd5kQj3P-Sxl";

  const form = useRef();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Form ref={form} onSubmit={handleSubmitEmail} className="mb-3">
      <Form.Group
        // ref={form}
        // onSubmit={handleSubmitEmail}
        className="mb-3"
        //controlId="harshalimankar8@gmail.com"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="to_name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="user_email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          placeholder="Describe your project"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
