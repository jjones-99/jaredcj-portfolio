import React from "react";
import { AppContext } from "../../App";
import {
  ContactFormBody,
  ContactFormCloseButton,
  ContactFormHeader,
  ContactFormCard,
} from "./ContactStyles";

const ContactThankYou: React.FC = () => {
  const { setRenderContactForm } = React.useContext(AppContext);

  return (
    <>
      <ContactFormHeader>
        <h1>Thanks for getting in touch.</h1>
        <ContactFormCloseButton type="button" onClick={() => setRenderContactForm!(false)}>
          <i className="fa fa-close" />
        </ContactFormCloseButton>
      </ContactFormHeader>
      <ContactFormBody>I'll get back to you shortly.</ContactFormBody>
    </>
  );
};

export default ContactThankYou;
