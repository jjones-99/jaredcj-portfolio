import React, { useEffect, useState } from "react";
import { setOverlayOpacity, toggleBodyScrolling } from "../../utils/helpers";
import ContactForm from "./ContactForm";
import {
  ContactFormCard, ContactFormContainer
} from "./ContactStyles";
import ContactThankYou from "./ContactThankYou";

export interface ContactFormProps {
  renderContactForm: boolean;
}

const Contact: React.FC<ContactFormProps> = (props) => {
  const [renderThankYou, setRenderThankYou] = useState(false);

  // Disable scrolling when the contact form is visible.
  useEffect(() => {
    toggleBodyScrolling(!props.renderContactForm);
    setOverlayOpacity(props.renderContactForm ? "10%" : "0");
    setRenderThankYou(false);
  }, [props.renderContactForm]);

  const cardClass = props.renderContactForm ? (renderThankYou ? "thank-you" : "form") : "";

  return (
    <ContactFormContainer visible={props.renderContactForm}>
      <ContactFormCard className={cardClass}>
        {renderThankYou ? (
          <ContactThankYou />
        ) : (
          <ContactForm onComplete={() => setRenderThankYou(true)} />
        )}
      </ContactFormCard>
    </ContactFormContainer>
  );
};

export default Contact;
