import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbraStyle = {
  backgroundColor: '#6b9080',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbraStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
