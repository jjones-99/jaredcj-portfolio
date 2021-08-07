import React, { useCallback, useState } from "react";
import { AppContext } from "../../App";
import { IconButton, PrimaryButton } from "../../styles/AppStyles";
import {
  ContactFormElement,
  ContactFormField,
  ContactFormFieldset,
  ContactFormFooter,
  ContactFormHeader,
  ContactFormInput,
  ContactFormLabel,
  ContactFormRow,
  ContactFormTextarea,
} from "./ContactStyles";

export interface ContactFormProps {
  onComplete: () => void;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { setRenderContactForm } = React.useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const onContactSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      await fetch("https://formsubmit.co/ajax/ba7a1b8b84c4220e93fce7e05db3bd75", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: "New inquiry from portfolio",
          _template: "table",
          name: userName,
          email: userEmail,
          message: userMessage,
        }),
      });

      props.onComplete();
    },
    [userName, userEmail, userMessage]
  );

  const thankYou = <div>Thanks!</div>;

  return (
    <ContactFormElement onSubmit={onContactSubmit}>
      <ContactFormHeader>
        <h1>I'd love to hear from you.</h1>
        <IconButton type="button" onClick={() => setRenderContactForm!(false)}>
          <i className="fa fa-close" />
        </IconButton>
      </ContactFormHeader>
      <ContactFormFieldset>
        <ContactFormRow>
          <ContactFormField>
            <ContactFormLabel htmlFor="nameContactFormInput">Name&nbsp;*</ContactFormLabel>
            <ContactFormInput
              name="name"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="nameContactFormInput"
              type="text"
            />
          </ContactFormField>
          <ContactFormField>
            <ContactFormLabel htmlFor="emailContactFormInput">Email&nbsp;*</ContactFormLabel>
            <ContactFormInput
              name="email"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              id="emailContactFormInput"
              type="email"
            />
          </ContactFormField>
        </ContactFormRow>
        <ContactFormField>
          <ContactFormLabel htmlFor="messageContactFormInput">Message&nbsp;*</ContactFormLabel>
          <ContactFormTextarea
            name="message"
            required
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            id="messageContactFormInput"
          />
        </ContactFormField>
      </ContactFormFieldset>
      <ContactFormFooter>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </ContactFormFooter>
      <input type="hidden" name="_subject" value="" />
      <input type="hidden" name="_template" value="" />
    </ContactFormElement>
  );
};

export default ContactForm;
