import React from "react";
import { Form, Field } from "react-final-form";

const ContactForm = () => {
  const required = (value) => (value ? undefined : "Required");

  const renderInput = (props) => {
    console.log(props);

    const className = `field ${
      props.meta.error && props.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <input
          {...props.input}
          placeholder={props.placeholder}
          autoComplete="off"
        />
        {props.meta.error && props.meta.touched && (
          <div>{props.meta.error}</div>
        )}
      </div>
    );
  };
  const onSubmitForm = () => {};

  return (
    <div className="ui container ">
      <h1>Please complete this form:</h1>
      <div className="ui form">
        <Form onSubmit={onSubmitForm}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>First Name</label>
                <div>
                  <Field
                    validate={required}
                    component={renderInput}
                    name="firstName"
                    placeholder="First Name"
                  ></Field>
                </div>
              </div>
              <div>
                <label>Last Name </label>
                <Field
                  validate={required}
                  name="lastName"
                  component={renderInput}
                  placeholder="Last Name"
                ></Field>
              </div>
              <div>
                <label>Ask me a question: </label>
                <Field name="email" component="textarea"></Field>
              </div>
              <button
                type="submit"
                className="ui button primary"
                style={{ marginTop: "15px" }}
              >
                Submit
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
