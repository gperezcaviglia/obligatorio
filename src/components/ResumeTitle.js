import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ResumeTitle extends React.Component {
  render() {
    return (
      <div>
        <div className="iconContainer">
          <FontAwesomeIcon
            icon={this.props.icon}
            className="resumeIcon"
          ></FontAwesomeIcon>
        </div>
        <h2 className="">{this.props.title}</h2>
      </div>
    );
  }
}
export default ResumeTitle;
