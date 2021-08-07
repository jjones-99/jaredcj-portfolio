import React from "react";
import { AppContext } from "../../App";
import { IconButton } from "../../styles/AppStyles";
import { ContactFormBody, ContactFormHeader } from "./ContactStyles";

const ContactThankYou: React.FC = () => {
  const { setRenderContactForm } = React.useContext(AppContext);

  return (
    <>
      <ContactFormHeader>
        <h1>Thanks for getting in touch.</h1>
        <IconButton type="button" onClick={() => setRenderContactForm!(false)}>
          <i className="fa fa-close" />
        </IconButton>
      </ContactFormHeader>
      <ContactFormBody>I'll get back to you shortly.</ContactFormBody>
    </>
  );
};

export default ContactThankYou;
