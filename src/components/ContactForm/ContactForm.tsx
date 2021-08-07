import React, { useEffect, useState } from "react";
import { toggleBodyScrolling } from "../../utils/helpers";
import { ContactFormContainer } from "./ContactFormStyles";

const ContactForm = () => {
  const [renderContactForm, RenderContactForm] = useState(false);

  // Disable scrolling when the contact form is visible.
  useEffect(() => {
    toggleBodyScrolling(!renderContactForm);
  }, [renderContactForm]);

  return (
    <>
      {renderContactForm && (
        <ContactFormContainer>
          <form className="contact-card">
            <header>
              <h1>I'd love to hear from you.</h1>
              <button className="close-button">
                <i className="fa fa-close" />
              </button>
            </header>
            <fieldset>
              <div className="contact-upper-fields">
                <div className="contact-field">
                  <label htmlFor="nameInput">Name</label>
                  <input id="nameInput" type="text" />
                </div>
                <div className="contact-field">
                  <label htmlFor="emailInput">Email</label>
                  <input id="emailInput" type="text" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="messageInput">Message</label>
                <textarea id="messageInput" />
              </div>
            </fieldset>
            <footer>
              <button className="contact-submit-button" type="submit">
                Submit
              </button>
            </footer>
          </form>
        </ContactFormContainer>
      )}
    </>
  );
};

export default ContactForm;
