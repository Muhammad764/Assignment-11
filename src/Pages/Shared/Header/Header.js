import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth)
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
    <Navbar.Brand as={Link} to="/" className='d-flex'>              
      <h2>VEL<span className='text-danger'>OCE</span></h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">  
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="items">My Items</Nav.Link>
                <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                {
                  user && <>
                  <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                  <Nav.Link as={Link} to="manageItem">Manage Item</Nav.Link>
                  </>
                }
                {user ?
                   <Nav.Link onClick={handleSignOut}  as={Link} className="text-danger"  to="login">Sing out</Nav.Link>
                  :
                  <Nav.Link as={Link} to="login">Login</Nav.Link>
                }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;