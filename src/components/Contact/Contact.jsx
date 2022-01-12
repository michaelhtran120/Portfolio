// service_y4czmrf
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    fromName: "",
    message: "",
    replyTo: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_y4czmrf", "template_1yp6t5t", toSend, "user_T06q8QQ2tJTdNSqcjFdwE")
      .then((response) => {
        if (response.status === 200) {
          setToSend({
            fromName: "",
            message: "",
            replyTo: ""
          });
          alert("Your message has been successfully sent! \n I will get back to you ASAP!");
        }
      })
      .catch((err) => {
        console.log("Failed...", err);
        alert("Message failed to send");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container className="p-5">
      <h1>Contact Me!</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="fromName"
            placeholder="Your first and last name"
            value={toSend.fromName}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Your Message..."
            value={toSend.message}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" name="replyTo" placeholder="Your email address" value={toSend.replyTo} onChange={handleChange} required={true} />
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
