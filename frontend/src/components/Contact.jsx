import React, { Fragment, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import { validate } from "react-email-validator";
import { motion } from "framer-motion";
import FormContainer from "./FormContainer";
import BalooneMessage from "./BalooneMessage";
import emailjs from "emailjs-com";

const Contact = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const {
    REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_USER_ID,
  } = process.env;

  const findFormErrors = () => {
    const newErrors = {};

    if (!name || name === "") newErrors.name = "הכנס את שמך!";
    else if (name.length > 30) newErrors.name = "שם ארוך מידי";

    if (!email || email === "") newErrors.email = "הכנס כתובת מייל!";
    else if (!validate(email)) newErrors.email = "כתובת מייל לא תקינה";

    if (!number || number === "") newErrors.number = "הכנס מספר טלפון!";
    else if (number.length < 9) newErrors.number = "מספר לא תקין";

    if (!message || message === "")
      newErrors.message = "תוכן ההודעה לא יכול להיות ריק";
    else if (message.length > 200) newErrors.message = "ההודעה ארוכה מידי";

    return newErrors;
  };

  const sendFeedback = (serviceID, templateId, variables, userID) => {
    console.log(variables);
    emailjs
      .send(serviceID, templateId, variables, userID)
      .then((res) => {
        console.log("Email successfully sent!");
        history.push("/");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(`Thank you for your message. Your query has been forwarded.`);
      const templateId = REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = REACT_APP_EMAILJS_SERVICE_ID;
      const userID = REACT_APP_EMAILJS_USER_ID;
      sendFeedback(
        serviceID,
        templateId,
        {
          name: name,
          email: email,
          number: number,
          message: message,
        },
        userID
      );
    }
  };

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className='me-auto' as={Col} md='6'>
            <BalooneMessage />
          </Col>
          <Col as={Col} md='6'>
            <FormContainer>
              <Form>
                <Form.Group
                  as={Col}
                  controlId='formGridName'
                  dir='rtl'
                  className='mt-2'
                >
                  <Form.Label>שם:</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='שם מלא'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId='formGridEmail'
                  dir='rtl'
                  className='mt-2'
                >
                  <Form.Label>כתובת מייל:</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type='email'
                    placeholder='Email ליצירת קשר'
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId='formGridMobile'
                  dir='rtl'
                  className='mt-2'
                >
                  <Form.Label>מספר טלפון:</Form.Label>
                  <Form.Control
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    placeholder='מספר ליצירת קשר'
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  id='formGridQuery'
                  dir='rtl'
                  className='mt-2'
                >
                  <Form.Label>תוכן ההודעה:</Form.Label>
                  <Form.Control
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    as='textarea'
                    rows={3}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Button
                    onClick={handleSubmit}
                    variant='primary'
                    type='submit'
                    className='mt-3'
                  >
                    שלח
                  </Button>
                </motion.div>
              </Form>
            </FormContainer>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Contact;
