import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function Contact() {
  const form = useRef();
  const handleSubmitEmail = async (e) => {
    debugger;
    e.preventDefault();
    console.log("in submit");
    emailjs
      .sendForm(
        "service_deupqn9",
        "template_2v7h5ds",
        form.current,
        "Z1m-Rmd5kQj3P-Sxl"
      )
      .then(
        (result) => {
          debugger;
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Form>
      <Form.Group
        ref={form}
        onSubmit={handleSubmitEmail}
        className="mb-3"
        controlId="harshalimankar8@gmail.com"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name={"user_email"}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
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
}

export default Contact;
