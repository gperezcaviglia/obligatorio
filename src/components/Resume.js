import React from "react";
import ResumeItem from "./ResumeItem";
import ResumeTitle from "./ResumeTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
class Resume extends React.Component {
  render() {
    return (
      <div>
        <section id="resume">
          <div className="container">
            <Row>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}
export default Resume;
