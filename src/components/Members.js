import Employee1 from "../images/Employee1.jpg";
import Employee2 from "../images/Employee2.jpg";
import Employee3 from "../images/Employee3.jpg";
import Employee4 from "../images/Employee4.jpg";
import Employee5 from "../images/Employee5.jpg";
import Employee6 from "../images/Employee6.jpg";
import Employee7 from "../images/Employee7.jpg";
import Employee8 from "../images/Employee8.jpg";
import { Button } from "reactstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Component } from "react";

class Members extends Component {
  render() {
    const socialMediaIcons = {
      cursor: "pointer",
    }
      return (
        <div className="members">
          <div>
            <h2>Get to know our team</h2>
          </div>
          <div className="container-fluid members">
            {/* rreshti1 */}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="item">
                  <img src={Employee1} style={socialMediaIcons} alt="emp1"></img>
                  <h4>Sam Withycombe</h4>
                  <p>Agricultural Engineer</p>
                  <div className="members-icons">
                    <a href="https://www.instagram.com/">
                      <FaInstagramSquare
                        className="sm-icon "
                        size="2em"
                        style={socialMediaIcons}
                      ></FaInstagramSquare>
                    </a>
                    <a href="https://www.facebook.com/">
                      <FaFacebookSquare
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaFacebookSquare>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaLinkedin>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="item">
                  <img src={Employee2} alt="emp2"></img>
                  <h4>Gary Case</h4>
                  <p>Agricultural Food Scientist</p>
                  <div className="members-icons">
                    <a href="https://www.instagram.com/">
                      <FaInstagramSquare
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaInstagramSquare>
                    </a>
                    <a href="https://www.facebook.com/">
                      <FaFacebookSquare
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaFacebookSquare>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaLinkedin>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="item">
                  <img src={Employee3} alt="emp3"></img>
                  <h4>John Smith</h4>
                  <p>Agricultural Lobbyist</p>
                  <div className="members-icons">
                    <a href="https://www.instagram.com/">
                      <FaInstagramSquare
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaInstagramSquare>
                    </a>
                    <a href="https://www.facebook.com/">
                      <FaFacebookSquare
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaFacebookSquare>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin
                        className="sm-icon"
                        size="2em"
                        style={socialMediaIcons}
                      ></FaLinkedin>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* rreshti2 */}
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <img src={Employee4} alt="emp4"></img>
                <h4>Amanda Curry</h4>
                <p>Marketing</p>
                <div className="members-icons">
                  <a href="https://www.instagram.com/">
                    <FaInstagramSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaInstagramSquare>
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaFacebookSquare>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <img src={Employee5} alt="emp5"></img>
                <h4>Ray Jonson</h4>
                <p>IT help desk</p>
                <div className="members-icons">
                  <a href="https://www.instagram.com/">
                    <FaInstagramSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaInstagramSquare>
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaFacebookSquare>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <img src={Employee6} alt="emp6"></img>
                <h4>Ana Bush</h4>
                <p>Agricultural Food Scientist</p>
                <div className="members-icons">
                  <a href="https://www.instagram.com/">
                    <FaInstagramSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaInstagramSquare>
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaFacebookSquare>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* rreshti3 */}
          <div className="row">
            <div className="col-2"></div>
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <img src={Employee7} alt="emp7"></img>
                <h4>Bella Wall</h4>
                <p>Accounting</p>
                <div className="members-icons">
                  <a href="https://www.instagram.com/">
                    <FaInstagramSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaInstagramSquare>
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaFacebookSquare>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="item">
                <img src={Employee8} alt="emp8"></img>
                <h4>Jon Doe</h4>
                <p>CEO</p>
                <div className="members-icons">
                  <a href="https://www.instagram.com/">
                    <FaInstagramSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaInstagramSquare>
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaFacebookSquare>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin
                      className="sm-icon"
                      size="2em"
                      style={socialMediaIcons}
                    ></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      );
    }
    }
export default Members;
