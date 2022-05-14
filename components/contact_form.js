import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import MyToast from "./toast";
import { sameEmailMessage, toastDelay } from "../constants/utilities";
import LoadingButton from "./loading_button";
import SubmitButton from "./submit_button";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [prevMail, setPrevMail] = useState("");
  const [className, setClassName] = useState("my-toast shadow");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (email === prevMail) {
        handleToast(sameEmailMessage, "my-toast shadow bg-danger text-white");
      } else {
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            name: name,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { resMessage } = await res.json();

        handleToast(resMessage, "my-toast shadow bg-success");

        setPrevMail(email);
      }
    }

    setValidated(true);
    setLoading(false);
  };

  const handleToast = (message, className) => {
    setEmailMessage(message);
    setClassName(className);
    setShow(true);
    setTimeout(function () {
      setShow(false);
    }, toastDelay);
  };

  return (
    <div className="contact">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mb-3"
        action="POST"
        data-netlify="true"
      >
        <p className="text-center title-text-color">shoot a message</p>
        <div className="row">
          <div className="col-sm-6 mb-2">
            <InputGroup hasValidation>
              <Form.Control
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="your name..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </InputGroup>
          </div>
          <div className="col-sm-6 mb-2">
            <InputGroup hasValidation>
              <Form.Control
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="your email..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email
              </Form.Control.Feedback>
            </InputGroup>
          </div>
        </div>

        <div className="row mt-5 mb-3">
          <div className="col">
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Leave a message here..."
                style={{ height: "100px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please write your message...
              </Form.Control.Feedback>
            </InputGroup>
          </div>
        </div>

        <div data-netlify-recaptcha="true" />

        {loading ? <LoadingButton /> : <SubmitButton />}
      </Form>

      <MyToast show={show} className={className}>
        {emailMessage}
      </MyToast>
    </div>
  );
};

export default ContactForm;
