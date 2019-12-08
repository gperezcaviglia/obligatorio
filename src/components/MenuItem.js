import React from "react";
class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.clase}>
        <a href={this.props.url}>{this.props.content}</a>
      </li>
    );
  }
}
export default MenuItem;
