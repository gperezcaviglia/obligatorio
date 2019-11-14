import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import { Container } from "react-bootstrap";

class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.clase}>
        <a href={this.props.url}>{this.props.content}</a>
      </li>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <button type="button" className={this.props.clase}>
        <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>{" "}
        {this.props.content}
      </button>
    );
  }
}
class Box extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-3 col-xs-12 mb-3">
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
      </div>
    );
  }
}
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
class Quantityitem extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6 text-center">
        <div className="icon">
          <FontAwesomeIcon
            icon={this.props.icon}
            className="resumeIcon"
          ></FontAwesomeIcon>
        </div>
        <h2>{this.props.number}</h2>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
class Obligatorio extends React.Component {
  render() {
    return (
      <Container id="obligatorio">
        <nav className="col-md-12 col-sm-12 max-width" id="#primary">
          <div className="navbar-brand">
            <a href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>
          <div className="float-right align-middle">
            <ul className="menu">
              <MenuItem clase="active" url="#primary" content="Home"></MenuItem>
              <MenuItem clase="" url="#about" content="About"></MenuItem>
              <MenuItem clase="" url="#services" content="Services"></MenuItem>
              <MenuItem clase="" url="#resume" content="Resume"></MenuItem>
              <MenuItem clase="" url="#portfolio" content="Work"></MenuItem>
              <MenuItem clase="" url="#contact" content="Contact"></MenuItem>
            </ul>
          </div>
        </nav>
        <div className="slider1">
          <div className="col-md-12 col-sm-12 text-center max-width">
            <div className="content">
              <div className="script-font this">Hi This is</div>
              <div className="name">Tom Saulnier</div>
              <p className="script-font frontend">
                Front-end Web Developer and Graphic Designer
              </p>
              <ul className="social center">
                <li>
                  <a className="facebook" href="#">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </li>
                <li>
                  <a className="google" href="#">
                    <FontAwesomeIcon icon={["fab", "google"]} />
                  </a>
                </li>
              </ul>
              <Button
                clase="btn btn-primary"
                icon=""
                content="Get a Free Quote"
              ></Button>
            </div>
          </div>
        </div>
        <section
          id="about"
          className="col-md-12 col-sm-12 text-center max-width"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="">
                  <img className="about-img" src="about-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="content-profile">
                  <h3>Hi Guys!</h3>
                  <p>
                    Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et
                    rutrum eleifend sollicitudin lacinia justo id turpis. Nec
                    convallis integer. Odio eget duis. Nulla aenean et. Blandit
                    varius sollicitudin. Pellentesque leo primis neque urna
                    magnis. Elit ut sollicitudin. Et est a nam dolores eget
                    itaque sagittis et parturient duis est eleifend sociis
                    rutrum odio viverra integer.
                  </p>
                  <div className="">
                    <ul className="">
                      <li>
                        <span className="title"> Name </span>{" "}
                        <span>Tom Saulnier</span>
                      </li>
                      <li>
                        <span className="title"> Age </span>{" "}
                        <span>25 Years</span>
                      </li>
                      <li>
                        <span className="title"> Experience </span>{" "}
                        <span>4 Years</span>
                      </li>
                      <li>
                        <span className="title"> Country </span>{" "}
                        <span>USA</span>
                      </li>
                      <li>
                        <span className="title"> Location </span>{" "}
                        <span>San Francisco, CA</span>
                      </li>
                      <li>
                        <span className="title"> e-mail </span>{" "}
                        <span>email@example.com</span>
                      </li>
                      <li>
                        <span className="title"> Phone </span>{" "}
                        <span>+ (00) 123 456 789</span>
                      </li>
                      <li>
                        <span className="title"> Freelance </span>{" "}
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    clase="btn btn-primary mr-2"
                    icon="paperclip"
                    content="Download Resume"
                  ></Button>
                  <Button
                    clase="btn btn-danger"
                    icon="comment-alt"
                    content="Contact me"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="greyBlock">
          <section
            id="services"
            className="col-md-12 col-sm-12 text-center max-width"
          >
            <h2>What I do</h2>
            <div className="container">
              <div className="row">
                <Box
                  icon="th-large"
                  title="Front-end Development"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
                ></Box>
                <Box
                  icon="layer-group"
                  title="Graphic Design"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
                ></Box>
                <Box
                  icon="briefcase"
                  title="Business Branding"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
                ></Box>
                <Box
                  icon="comments"
                  title="Consultancy"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
                ></Box>
              </div>
            </div>
          </section>
        </div>
        <section id="resume">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="education wow fadeInRight">
                  <ul className="resume">
                    <li>
                      <ResumeTitle
                        icon="graduation-cap"
                        title="Education"
                      ></ResumeTitle>
                    </li>
                    <ResumeItem
                      title="Bsc In CSE - Yale University"
                      date="2012 - 2016"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                    <ResumeItem
                      title="Higher Secondary School - San Francisco College"
                      date="2010 - 2012"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                    <ResumeItem
                      title="Secondary School - Labratory High School"
                      date="2005 - 2010"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="experience wow fadeInRight">
                  <ul className="resume">
                    <li>
                      <ResumeTitle
                        icon="briefcase"
                        title="Experience"
                      ></ResumeTitle>
                    </li>
                    <ResumeItem
                      title="Art Director - Tesla Inc."
                      date="Jan 2018 - Present"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                    <ResumeItem
                      title="UX/UI Designer - Samsung"
                      date="Nov 2016 - Dec 2017"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                    <ResumeItem
                      title="Intern UI Designer - UIdeck"
                      date="Mar 2015 - Oct 2016"
                      content="Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                    ></ResumeItem>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="greyBlock">
          <div className="col-md-12 col-sm-12 text-center max-width">
            <h2>My Remarkable Works</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="text-center mb-4">
                  <Button
                    clase="btn btn-outline-primary mr-2"
                    icon=""
                    content="All"
                  ></Button>
                  <Button
                    clase="btn btn-primary mr-2"
                    icon=""
                    content="Design"
                  ></Button>
                  <Button
                    clase="btn btn-primary mr-2"
                    icon=""
                    content="Development"
                  ></Button>
                  <Button
                    clase="btn btn-primary"
                    icon=""
                    content="Print"
                  ></Button>
                </div>
              </div>
              <div className="row">
                <Portfolio tipo="" img="img-1.jpg" url=""></Portfolio>
                <Portfolio tipo="" img="img-2.jpg" url=""></Portfolio>
                <Portfolio tipo="" img="img-3.jpg" url=""></Portfolio>
                <Portfolio tipo="" img="img-4.jpg" url=""></Portfolio>
                <Portfolio tipo="" img="img-5.jpg" url=""></Portfolio>
                <Portfolio tipo="" img="img-6.jpg" url=""></Portfolio>
              </div>
            </div>
          </div>
        </section>
        <section id="quantity" className="slider2 pt-5">
          <div className="text-white mt-2">
            <div className="container">
              <div className="row">
                <Quantityitem
                  icon="briefcase"
                  number="250"
                  title="Project Working"
                ></Quantityitem>
                <Quantityitem
                  icon="check-circle"
                  number="950"
                  title="Project Done"
                ></Quantityitem>
                <Quantityitem
                  icon="gem"
                  number="150"
                  title="Awards Received"
                ></Quantityitem>
                <Quantityitem
                  icon="heart"
                  number="299"
                  title="Happy Clients"
                ></Quantityitem>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="col-md-12 col-sm-12 max-width mt-5 mb-5"
        >
          <div className="row contactContainer">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <h2 className="mb-5">Contact Form</h2>
              <form id="form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="submit-button">
                      <button
                        className="btn btn-primary mb-3"
                        id="submit"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <h2 className="mb-5">Contact Address</h2>
              <div className="infoRight">
                <div className="infoContacting">
                  <div className="iconContact">
                    <FontAwesomeIcon
                      icon={this.props.icon}
                      className="map-maker"
                    ></FontAwesomeIcon>
                  </div>
                  <p>San Francisco, CA</p>
                </div>
                <div className="infoContacting">
                  <div className="iconContact">
                    <FontAwesomeIcon
                      icon={this.props.icon}
                      className="envelope"
                    ></FontAwesomeIcon>
                  </div>
                  <p>
                    <a href="mailto:hello@tom.com">hello@tom.com</a>
                  </p>
                  <p>
                    <a href="mailto:tomsaulnier@gmail.com">
                      tomsaulnier@gmail.com
                    </a>
                  </p>
                </div>
                <div className="infoContacting">
                  <div className="iconContact">
                    <i className="fa fa-phone"></i>
                  </div>
                  <p>
                    <a href="#">+ (00) 123 456 789</a>
                  </p>
                  <p>
                    <a href="#">+ (00) 123 344 789</a>
                  </p>
                </div>
              </div>
            </div>
            <img className="mx-auto d-block" src="map.png" alt="map" />
          </div>
        </section>
        <footer className="bg-dark text-white text-center pt-5 pb-5">
          <ul className="social center">
            <li>
              <a className="facebook" href="#">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li>
              <a className="instagram" href="#">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
            </li>
            <li>
              <a className="google" href="#">
                <FontAwesomeIcon icon={["fab", "google"]} />
              </a>
            </li>
          </ul>
          <p>Copyright © 2018 UIdeck All Right Reserved</p>
        </footer>
      </Container>
    );
  }
}
ReactDOM.render(<Obligatorio />, document.getElementById("root"));
