import React, { Fragment } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import BalooneMessage from "./BalooneMessage";

const Contact = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className='me-auto'>
            <BalooneMessage />
          </Col>
          <Col>
            <Form>
              <Form.Label>צור קשר</Form.Label>
              <Form.Group className='mt-2' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mt-2' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Contact;
