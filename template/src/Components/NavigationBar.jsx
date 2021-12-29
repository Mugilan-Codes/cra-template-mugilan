import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            React-Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
