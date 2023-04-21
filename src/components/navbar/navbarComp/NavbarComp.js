import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo/amplworkLogo.png'
import './NavbarComp.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";

function NavbarComp() {
  let Mystyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontWeight: '600',
    color: isActive ? ' rgb(255, 255, 255)' : 'rgb(254,254,254)',
    borderBottom: isActive ? "1px solid white" : '',
    padding: '7px',
    hover: {
      color: 'red'
  }
  });

  return (
    <Navbar expand="lg" className="pt-0">
      {/* <Container> */}
      <Navbar.Brand href="#home" >
        <Image src={logo} className="img-fluid" width='230' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="NavLinks ms-auto ">
          <NavLink to="/who-we-are" style={Mystyle}><li>Who we are</li></NavLink>
          <NavLink to="/what-we-do" style={Mystyle}><li>What we do</li></NavLink>
          <NavLink to="/our-culture" style={Mystyle}><li>Our culture</li></NavLink>
          <NavLink to="/work-with-us" style={Mystyle}><li>Work with us</li></NavLink>
          <NavLink to="/case-studies" style={Mystyle}><li>Case studies</li></NavLink>
          <NavLink to="/blog" style={Mystyle}><li>Blog</li></NavLink>
          <NavLink to="/contact-us" style={Mystyle}><li>Contact us</li></NavLink>

        </Nav>
        <Nav>
          <Nav.Link href="/inquire-now">
            <Button
             
              className="Button rounded-pill fw-bold text-uppercase"
            >
              inquire now
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarComp;


