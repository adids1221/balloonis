import React, { Fragment, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import NotFound from "../components/NotFound";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  const registerUser = userRegister.userInfo;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (registerUser) {
      history.push(redirect);
    }
  }, [history, registerUser, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(username, password));
    }
  };

  return (
    <Fragment>
      {userInfo ? (
        <FormContainer>
          <h1>Sign Up</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Spinner />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='username'>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className='mt-3' type='submit' variant='primary'>
              Register
            </Button>
          </Form>
        </FormContainer>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};

export default RegisterScreen;
