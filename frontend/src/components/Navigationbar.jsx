import React, { Fragment } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Navigationbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  return (
    <Fragment>
      <Navbar bg='light' expand='md' className='me-auto pl-0'>
        <Container>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkContainer to='/'>
              <Navbar.Brand className='p-0'>Balloonies</Navbar.Brand>
            </LinkContainer>
          </motion.div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='מוצרים' id='basic-nav-dropdown' dir='rtl'>
                <LinkContainer to='ballones'>
                  <NavDropdown.Item dir='rtl'>בלונים</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='stickers'>
                  <NavDropdown.Item dir='rtl'>
                    מדבקות לקיר / סטיקרים
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='gifts'>
                  <NavDropdown.Item dir='rtl'>מארזים</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/aboutus'>
                <Nav.Link dir='rtl'>מי אנחנו</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link dir='rtl'>צור קשר</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          {userInfo && userInfo.is_admin && (
            <NavDropdown title='Admin' id='adminmenu'>
              <LinkContainer to='/admin/userList'>
                <NavDropdown.Item>משתמשים</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/productList'>
                <NavDropdown.Item>מוצרים</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orderList'>
                <NavDropdown.Item>קטגוריות</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigationbar;
