import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class QuantityItem extends React.Component {
  render() {
    return (
      <Col className="text-center">
        <div className="icon">
          <FontAwesomeIcon
            icon={this.props.icon}
            className="resumeIcon"
          ></FontAwesomeIcon>
        </div>
        <h2>{this.props.number}</h2>
        <p>{this.props.title}</p>
      </Col>
    );
  }
}
export default QuantityItem;
