import React from "react";
import ContactForm from "../components/contact_form";
import Divider from "../components/divider";
import Title from "../components/title";
import Social from "../components/social";

const Contact = () => {
  return (
    <div id="contact" className="background">
      <Divider />
      <Title>Get in touch</Title>
      <ContactForm />
      <div className="d-flex justify-content-center mt-5">
        <Social />
      </div>
    </div>
  );
};

export default Contact;
