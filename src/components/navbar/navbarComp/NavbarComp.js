import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logoAmplework from "../../../assets/logo/amplworkLogo.png";
import { NavLink, Outlet } from "react-router-dom";
function NavbarComp(props) {
  let Mystyle=({ isActive }) => ({
    fontWeight:'bold',
    color: isActive ? ' rgb(255, 255, 255)' : 'rgb(190, 193, 195)',
    // background: isActive ? 'rgb(6, 6, 199)' : '#f0f0f0',
  fontSize : isActive ? "1.07rem" : '0.93rem',

    padding:'7px',
    //  borderRadius:'5px'
  });
  const{bgColor}=props
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Nav>
            <Nav.Link href="/home">
              <img src={logoAmplework} width="70%" alt="" />
            </Nav.Link>
          </Nav>
        </div>
        <div className="col-8">
          <Navbar collapseOnSelect expand="lg" bg={bgColor} variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto align-items-center fw-semibold">
                <NavLink to="/who-we-are" style={Mystyle}>Who we are</NavLink>
                <NavLink  to="/what-we-do" style={Mystyle}>What we do</NavLink>
                <NavLink to="/our-culture" style={Mystyle}>Our culture</NavLink>
                <NavLink to="/work-with-us" style={Mystyle}>Work with us</NavLink>
                <NavLink to="/case-studies" style={Mystyle}>Case studies</NavLink>
                <NavLink to="/blog" style={Mystyle}>Blog</NavLink>
                <NavLink to="/contact-us" style={Mystyle}>Contact us</NavLink>
              </Nav>
              <Nav>
                <Nav.Link href="/inquire-now">
                  <Button
                    variant="outline-warning"
                    className="rounded-pill fw-semibold text-uppercase"
                  >
                    inquire now
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default NavbarComp;

