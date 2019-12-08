import React from "react";
import CustomButton from "./CustomButton";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class About extends React.Component {
  render() {
    return (
      <div>
        <Container
          fluid={true}
          id="about"
          className="col-md-12 col-sm-12 text-center max-width"
        >
          <Container className="container">
            <Row>
              <Col>
                <div className="">
                  <img className="about-img" src="about-1.jpg" alt="" />
                </div>
              </Col>
              <Col>
                <div className="content-profile">
                  <h3>Hi Guys!</h3>
                  <p>
                    Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et
                    rutrum eleifend sollicitudin lacinia justo id turpis. Nec
                    convallis integer. Odio eget duis. Nulla aenean et. Blandit
                    varius sollicitudin. Pellentesque leo primis neque urna
                    magnis. Elit ut sollicitudin. Et est a nam dolores eget
                    itaque sagittis et parturient duis est eleifend sociis
                    rutrum odio viverra integer.
                  </p>
                  <div>
                    <ul>
                      <li>
                        <span className="title"> Name </span>{" "}
                        <span>Tom Saulnier</span>
                      </li>
                      <li>
                        <span className="title"> Age </span>{" "}
                        <span>25 Years</span>
                      </li>
                      <li>
                        <span className="title"> Experience </span>{" "}
                        <span>4 Years</span>
                      </li>
                      <li>
                        <span className="title"> Country </span>{" "}
                        <span>USA</span>
                      </li>
                      <li>
                        <span className="title"> Location </span>{" "}
                        <span>San Francisco, CA</span>
                      </li>
                      <li>
                        <span className="title"> e-mail </span>{" "}
                        <span>email@example.com2</span>
                      </li>
                      <li>
                        <span className="title"> Phone </span>{" "}
                        <span>+ (00) 123 456 789</span>
                      </li>
                      <li>
                        <span className="title"> Freelance </span>{" "}
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                  <CustomButton
                    clase="btn btn-primary mr-2"
                    icon="paperclip"
                    content="Download Resume"
                  ></CustomButton>
                  <CustomButton
                    clase="btn btn-danger"
                    icon="comment-alt"
                    content="Contact me"
                  ></CustomButton>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
export default About;
