import React from "react";
class Portfolio extends React.Component {
  render() {
    return (
      <div
        className="col-sm-6 col-md-4 col-lg-4 col-xl-4 "
        tipo={this.props.tipo}
      >
        <div className="case">
          <img src={this.props.img} alt="" />
          <div className="overlay">
            <a href={this.props.url}>
              <i className="fas fa-eye"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
