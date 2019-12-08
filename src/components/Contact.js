import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
class Contact extends React.Component {
  render() {
    return (
      <Container id="contact" className="max-width mt-5 mb-5">
        <Row className="contactContainer">
          <Col>
            <h2 className="mb-5">Contact Form</h2>
            <Form>
              <Form.Group controlId="form">
                <Row>
                  <Col>
                    <Form.Control placeholder="Name" className="mb-3" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" className="mb-3" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control placeholder="Subject" className="mb-3" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                      rows="5"
                    />
                  </Col>
                </Row>
                <Button variant="primary" className="mt-3">
                  Send Message
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h2 className="mb-5">Contact Address</h2>
            <div className="infoRight">
              <div className="infoContacting">
                <div className="iconContact">
                  <FontAwesomeIcon
                    icon={this.props.icon}
                    className="map-maker"
                  ></FontAwesomeIcon>
                </div>
                <p>San Francisco, CA</p>
              </div>
              <div className="infoContacting">
                <div className="iconContact">
                  <FontAwesomeIcon
                    icon={this.props.icon}
                    className="envelope"
                  ></FontAwesomeIcon>
                </div>
                <p>
                  <a href="mailto:hello@tom.com">hello@tom.com</a>
                </p>
                <p>
                  <a href="mailto:tomsaulnier@gmail.com">
                    tomsaulnier@gmail.com
                  </a>
                </p>
              </div>
              <div className="infoContacting">
                <div className="iconContact">
                  <i className="fa fa-phone"></i>
                </div>
                <p>
                  <a href="#">+ (00) 123 456 789</a>
                </p>
                <p>
                  <a href="#">+ (00) 123 344 789</a>
                </p>
              </div>
            </div>
          </Col>
          <img className="mx-auto d-block" src="map.png" alt="map" />
        </Row>
      </Container>
    );
  }
}
export default Contact;
