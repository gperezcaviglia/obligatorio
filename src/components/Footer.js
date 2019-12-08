import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
class Footer extends React.Component {
  render() {
    return (
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
    );
  }
}
export default Footer;
