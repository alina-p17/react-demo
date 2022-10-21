import React from "react";
import { Form, Field } from "react-final-form";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ContactPageForm = (props) => {
  const formIsSubmitted = true;

  const required = (value) =>
    value ? undefined : (
      <Typography variant="p" style={{ color: "red" }}>
        *Required
      </Typography>
    );

  const invalidEmail = (value) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regEx.test(value)) {
      return "";
    } else if (!regEx.test(value) && value !== "") {
      return (
        <Typography variant="p" style={{ color: "red" }}>
          *Email is not valid
        </Typography>
      );
    } else return "";
  };

  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const renderInput = (props) => {
    const className = `${
      props.meta.error && props.meta.touched ? "error" : ""
    }`;
    return (
      <Alert variant="outlined" severity={className}>
        <TextField
          {...props.input}
          placeholder={props.placeholder}
          autoComplete="off"
        />
        {props.meta.error && props.meta.touched && (
          <Typography variant="p">{props.meta.error}</Typography>
        )}
      </Alert>
    );
  };

  const renderTextarea = (props) => {
    return (
      <Stack>
        <TextField
          {...props.input}
          placeholder={props.placeholder}
          multiline
          rows={14}
        />
      </Stack>
    );
  };

  const onSubmitForm = (values) => {
    props.formSubmitted(formIsSubmitted);
    props.formFirstName(values.firstName);
  };

  return (
    <Container sx={{ width: "1000px" }}>
      <Typography
        variant="h3"
        sx={{ marginBottom: "40px", textAlign: "center" }}
      >
        Contact Me
      </Typography>
      <Box
        style={{
          border: "1px solid grey",
          padding: "25px",
        }}
      >
        <Form onSubmit={onSubmitForm}>
          {({ handleSubmit, values, submitting, pristine }) => (
            <form
              onSubmit={(event) => {
                console.log(values);

                handleSubmit(event);
              }}
            >
              <Box>
                <InputLabel required={true}>First Name</InputLabel>
                <Field
                  validate={required}
                  component={renderInput}
                  name="firstName"
                  placeholder="First Name"
                ></Field>
              </Box>
              <Box>
                <InputLabel required={true}>Last Name</InputLabel>
                <Field
                  validate={required}
                  name="lastName"
                  component={renderInput}
                  placeholder="Last Name"
                ></Field>
              </Box>
              <Box>
                <InputLabel required={true}>Email</InputLabel>
                <Field
                  validate={composeValidators(required, invalidEmail)}
                  name="email"
                  component={renderInput}
                  placeholder="Email"
                ></Field>
              </Box>
              <Box>
                <InputLabel>Ask me a question: </InputLabel>
                <Field name="textarea" component={renderTextarea}></Field>
              </Box>
              <Button
                type="submit"
                disabled={submitting || pristine}
                className="ui button primary"
                style={{ marginTop: "15px" }}
              >
                Submit
              </Button>
            </form>
          )}
        </Form>
      </Box>
    </Container>
  );
};

export default ContactPageForm;
