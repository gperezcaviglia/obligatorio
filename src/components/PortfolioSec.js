import React from "react";
import Portfolio from "./Portfolio";
import CustomButton from "./CustomButton";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class PortfolioSec extends React.Component {
  render() {
    return (
      <section id="portfolio" className="greyBlock">
        <Col className="text-center max-width">
          <h2>My Remarkable Works</h2>
          <Row>
            <Col>
              <div className="text-center mb-4">
                <CustomButton
                  clase="btn btn-outline-primary mr-2"
                  icon=""
                  content="All"
                ></CustomButton>
                <CustomButton
                  clase="btn btn-primary mr-2"
                  icon=""
                  content="Design"
                ></CustomButton>
                <CustomButton
                  clase="btn btn-primary mr-2"
                  icon=""
                  content="Development"
                ></CustomButton>
                <CustomButton
                  clase="btn btn-primary"
                  icon=""
                  content="Print"
                ></CustomButton>
              </div>
            </Col>
            <Row>
              <Portfolio tipo="" img="img-1.jpg" url=""></Portfolio>
              <Portfolio tipo="" img="img-2.jpg" url=""></Portfolio>
              <Portfolio tipo="" img="img-3.jpg" url=""></Portfolio>
              <Portfolio tipo="" img="img-4.jpg" url=""></Portfolio>
              <Portfolio tipo="" img="img-5.jpg" url=""></Portfolio>
              <Portfolio tipo="" img="img-6.jpg" url=""></Portfolio>
            </Row>
          </Row>
        </Col>
      </section>
    );
  }
}
export default PortfolioSec;
