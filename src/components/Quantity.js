import React from "react";
import QuantityItem from "./QuantityItem";
import "bootstrap/dist/css/bootstrap.min.css";
class Quantity extends React.Component {
  render() {
    return (
      <section id="quantity" className="slider2 pt-5">
        <div className="text-white mt-2">
          <div className="container">
            <div className="row">
              <QuantityItem
                icon="briefcase"
                number="250"
                title="Project Working"
              ></QuantityItem>
              <QuantityItem
                icon="check-circle"
                number="950"
                title="Project Done"
              ></QuantityItem>
              <QuantityItem
                icon="gem"
                number="150"
                title="Awards Received"
              ></QuantityItem>
              <QuantityItem
                icon="heart"
                number="299"
                title="Happy Clients"
              ></QuantityItem>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Quantity;
