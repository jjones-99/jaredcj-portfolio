import React, { useEffect, useState } from "react";
import { AppContext } from "../../App";
import { setOverlayOpacity, toggleBodyScrolling } from "../../utils/helpers";
import {
  ContactForm,
  ContactFormCloseButton,
  ContactFormContainer,
  ContactFormField,
  ContactFormFieldset,
  ContactFormFooter,
  ContactFormHeader,
  ContactFormInput,
  ContactFormLabel,
  ContactFormRow,
  ContactFormSubmitButton,
  ContactFormTextarea,
} from "./ContactStyles";

export interface ContactFormProps {
  renderContactForm: boolean;
}

const Contact: React.FC<ContactFormProps> = ({ renderContactForm }) => {
  const { setRenderContactForm } = React.useContext(AppContext);

  // Disable scrolling when the contact form is visible.
  useEffect(() => {
    toggleBodyScrolling(!renderContactForm);
    setOverlayOpacity(renderContactForm ? "30%" : "0");
  }, [renderContactForm]);

  return (
    <ContactFormContainer visible={renderContactForm}>
      <ContactForm className={renderContactForm ? "displayed" : ""}>
        <ContactFormHeader>
          <h1>I'd love to hear from you.</h1>
          <ContactFormCloseButton type="button" onClick={() => setRenderContactForm!(false)}>
            <i className="fa fa-close" />
          </ContactFormCloseButton>
        </ContactFormHeader>
        <ContactFormFieldset>
          <ContactFormRow>
            <ContactFormField>
              <ContactFormLabel htmlFor="nameContactFormInput">Name</ContactFormLabel>
              <ContactFormInput id="nameContactFormInput" type="text" />
            </ContactFormField>
            <ContactFormField>
              <ContactFormLabel htmlFor="emailContactFormInput">Email</ContactFormLabel>
              <ContactFormInput id="emailContactFormInput" type="text" />
            </ContactFormField>
          </ContactFormRow>
          <ContactFormField>
            <ContactFormLabel htmlFor="messageContactFormInput">Message</ContactFormLabel>
            <ContactFormTextarea id="messageContactFormInput" />
          </ContactFormField>
        </ContactFormFieldset>
        <ContactFormFooter>
          <ContactFormSubmitButton type="submit">Submit</ContactFormSubmitButton>
        </ContactFormFooter>
      </ContactForm>
    </ContactFormContainer>
  );
};

export default Contact;
