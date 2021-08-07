import styled from "styled-components";

export const ContactFormContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spartan", sans-serif;
  font-size: 1.2rem;
`;

export const ContactForm = styled.form`
  width: 80rem;
  max-width: 80%;
  margin: 0;
  border-radius: 2rem;
  padding: 2rem;

  // https://glassmorphism.com
  background: rgba(200, 200, 200, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ContactFormHeader = styled.header`
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    color: rgb(40, 40, 40);
    margin-top: 0;
    text-transform: uppercase;
    font-size: 1.5em;
  }
`;

export const ContactFormCloseButton = styled.button`
  color: rgb(40, 40, 40);
  background: none;
  border: none;
  font-size: 2em;
`;

export const ContactFormFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const ContactFormRow = styled.div`
  display: flex;
  width: 100%;
`;

export const ContactFormField = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
`;

export const ContactFormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ContactFormInput = styled.input`
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 1em;
  font-family: "Spartan", sans-serif;
  outline: none;
`;

export const ContactFormTextarea = styled.textarea`
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 1em;
  font-family: "Spartan", sans-serif;
  min-height: 8rem;
  resize: vertical;
  outline: none;

  &::-webkit-scrollbar {
    width: 7px;
    background-color: lightgrey;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }

  &::-webkit-resizer {
    display: block;
    max-width: 7px;
    max-height: 7px;
    border-top: 4px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid grey;
    border-bottom: 4px solid grey;
    border-radius: 0.25rem;
    margin: 2px;
  }
`;

export const ContactFormFooter = styled.footer`
  padding: 0rem 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

export const ContactFormSubmitButton = styled.button`
  font-family: "Spartan", sans-serif;
  font-size: 1em;
  font-weight: 500;
  padding: 0.2em 2em;
  border-radius: 100em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: calc(1em * 2);
  background-color: ${({ theme }) => theme.colorPrimary};
  color: white;
`;
