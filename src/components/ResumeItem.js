import React from "react";
class ResumeItem extends React.Component {
  render() {
    return (
      <li>
        <div className="item">
          <h3 className="">{this.props.title}</h3>
          <span>{this.props.date}</span>
          <p>{this.props.content}</p>
        </div>
      </li>
    );
  }
}
export default ResumeItem;
