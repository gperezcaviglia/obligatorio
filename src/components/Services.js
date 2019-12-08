import React from "react";
import Box from "./Box";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Services extends React.Component {
  render() {
    return (
      <Container fluid={true} className="greyBlock">
        <Container
          id="services"
          className="col-md-12 col-sm-12 text-center max-width"
        >
          <h2>What I do</h2>
          <div className="container">
            <Row>
              <Box
                icon="th-large"
                title="Front-end Development"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
              ></Box>
              <Box
                icon="layer-group"
                title="Graphic Design"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
              ></Box>
              <Box
                icon="briefcase"
                title="Business Branding"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
              ></Box>
              <Box
                icon="comments"
                title="Consultancy"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
              ></Box>
            </Row>
          </div>
        </Container>
      </Container>
    );
  }
}
export default Services;
