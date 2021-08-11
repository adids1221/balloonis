import React, { Fragment } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigationbar = () => {
  return (
    <Fragment>
      <Navbar bg='light' expand='md' className='me-auto pl-0'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='p-0'>Balloonies</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='מוצרים' id='basic-nav-dropdown'>
                <LinkContainer to='ballones'>
                  <NavDropdown.Item>בלונים</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='stickers'>
                  <NavDropdown.Item>מדבקות לקיר / סטיקרים</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/aboutus'>
                <Nav.Link>מי אנחנו</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>צור קשר</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigationbar;
