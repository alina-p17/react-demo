import React from "react";
import ContactPageForm from "./ContactPageForm";
import ContactPageMessage from "./ContactPageMessage";
import { useState } from "react";
import Box from "@mui/material/Box";

const ContactPage = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleFormSubmitted = (formIsSubmitted) => {
    setFormIsSubmitted(formIsSubmitted);
  };

  const handleFormFirstName = (firstName) => {
    setFirstName(firstName);
  };
  return (
    <Box>
      {formIsSubmitted ? (
        <ContactPageMessage firstName={firstName} />
      ) : (
        <ContactPageForm
          formSubmitted={handleFormSubmitted}
          formFirstName={handleFormFirstName}
        />
      )}
    </Box>
  );
};

export default ContactPage;
