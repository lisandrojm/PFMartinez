import { useState, useEffect } from 'react';
import './NavBar.css';
import logo from './assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
/* bootstrap_react */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

const categoryTextMap = {
  procesador: 'Procesadores',
  mother: 'Mothers',
  placa: 'Placas de video',
};

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryText, setSelectedCategoryText] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/category/')) {
      const category = location.pathname.split('/')[2];
      setSelectedCategory(category);
      setSelectedCategoryText(categoryTextMap[category]);
    } else {
      setSelectedCategory(null);
      setSelectedCategoryText(null);
    }
  }, [location]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Navbar.Brand as={Link} to="/products" className="NavBar-brand">
                <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top img-fluid " /> Freelo ECOM
              </Navbar.Brand>
            </div>
            <div className="d-lg-none">
              <CartWidget />
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-start">
              <NavDropdown title="Categorías" id="basic-nav-dropdown" className="Option">
                <NavDropdown.Item as={Link} to={`/category/procesador`} className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')} bg="dark" variant="dark">
                  Procesadores
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/mother`} bg="dark" variant="dark" className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')}>
                  Mothers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/placa`} bg="dark" variant="dark" className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')}>
                  Placas de video
                </NavDropdown.Item>
              </NavDropdown>
              <div className="text-light d-flex justify-content-start align-items-center ">
                <div className="d-none d-lg-block">
                  <CartWidget />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {selectedCategory && <h3 className="pt-3 text-white">{selectedCategoryText}</h3>}
    </>
  );
};

export default NavBar;
