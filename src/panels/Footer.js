import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/logo.jpg";

const Footer = (props) => {
  const menuItemStyle = {
    cursor: "pointer",
  };
  
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <div className="address">
              <div className="footer-icons">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  size="3x"
                ></FontAwesomeIcon>
                <h3>Don Bosko</h3>
              </div>
            </div>

            <div className="officeNumber">
              <div className="footer-icons">
                <FontAwesomeIcon icon="phone" size="3x"></FontAwesomeIcon>
                <h3>+355695796203</h3>
              </div>
            </div>
            <div className="email">
              <div className="footer-icons">
                <FontAwesomeIcon
                  icon="envelope-square"
                  size="3x"
                ></FontAwesomeIcon>
                <h3>hr.smartF@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="col-7">
          <div className="footer-logo">
              <img src={Logo}></img>
            </div>
            <div className="footer-contact">
              <h3
                style={menuItemStyle}
                onClick={() => props.changeActiveMenuItem("ContactUs")}
              >
                Contact Us
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
