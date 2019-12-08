import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CustomButton extends React.Component {
  render() {
    return (
      <Button variant={this.props.clase}>
        <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>{" "}
        {this.props.content}
      </Button>
    );
  }
}
export default CustomButton;
