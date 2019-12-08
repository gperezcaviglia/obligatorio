import React from "react";
import ReactDOM from "react-dom";
import Resume from "./components/Resume";
import PortfolioSec from "./components/PortfolioSec";
import Quantity from "./components/Quantity";
import Primary from "./components/Primary";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import {
  faPaperclip,
  faCommentAlt,
  faThLarge,
  faLayerGroup,
  faBriefcase,
  faComments,
  faGraduationCap,
  faCheckCircle,
  faGem,
  faHeart,
  faMapMarker,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faPaperclip,
  faCommentAlt,
  faThLarge,
  faLayerGroup,
  faBriefcase,
  faComments,
  faGraduationCap,
  faCheckCircle,
  faGem,
  faHeart,
  faMapMarker,
  faEnvelope
);
class Obligatorio extends React.Component {
  render() {
    return (
      <Container fluid={true} className="pr-0 pl-0" id="obligatorio">
        <Primary></Primary>
        <About></About>
        <Services></Services>
        <Resume></Resume>
        <PortfolioSec></PortfolioSec>
        <Quantity></Quantity>
        <Contact></Contact>
        <Footer></Footer>
      </Container>
    );
  }
}
ReactDOM.render(<Obligatorio />, document.getElementById("root"));
