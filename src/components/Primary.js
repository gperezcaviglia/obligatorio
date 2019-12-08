import React from "react";
import MenuItem from "./MenuItem";
import CustomButton from "./CustomButton";
import { Container, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Primary extends React.Component {
  render() {
    return (
      <div>
        <Container id="primary">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <a href="#">
                <img src="logo.png" alt="" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <div className="ml-auto">
                <ul className="menu">
                  <MenuItem
                    clase="active"
                    url="#primary"
                    content="Home"
                  ></MenuItem>
                  <MenuItem clase="" url="#about" content="About"></MenuItem>
                  <MenuItem
                    clase=""
                    url="#services"
                    content="Services"
                  ></MenuItem>
                  <MenuItem clase="" url="#resume" content="Resume"></MenuItem>
                  <MenuItem clase="" url="#portfolio" content="Work"></MenuItem>
                  <MenuItem
                    clase=""
                    url="#contact"
                    content="Contact"
                  ></MenuItem>
                </ul>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container fluid={true} className="slider1">
          <Col className="text-center max-width">
            <Col className="content">
              <div className="script-font this">Hi This is</div>
              <div className="name">Tom Saulnier</div>
              <p className="script-font frontend">
                Front-end Web Developer and Graphic Designer
              </p>
              <ul className="social center">
                <li>
                  <a className="facebook" href="#">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </li>
                <li>
                  <a className="google" href="#">
                    <FontAwesomeIcon icon={["fab", "google"]} />
                  </a>
                </li>
              </ul>
              <CustomButton
                clase="btn btn-primary"
                icon=""
                content="Get a Free Quote"
              ></CustomButton>
            </Col>
          </Col>
        </Container>
      </div>
    );
  }
}
export default Primary;
