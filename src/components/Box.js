import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Box extends React.Component {
  render() {
    return (
      <Col className="mb-3">
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon
              icon={this.props.icon}
              className="boxIcon"
            ></FontAwesomeIcon>
          </div>
          <div>
            <h3>
              <a href="#">{this.props.title}</a>
            </h3>
            <p>{this.props.content}</p>
          </div>
        </div>
      </Col>
    );
  }
}
export default Box;
