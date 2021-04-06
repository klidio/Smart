import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/logo.jpg";
{
  /* <FontAwesomeIcon
icon="map-marker-alt"
size="3x"
></FontAwesomeIcon>

<FontAwesomeIcon icon="phone" size="3x"></FontAwesomeIcon>

<FontAwesomeIcon
                icon="envelope-square"
                size="3x"
              ></FontAwesomeIcon> */
}

const Footer = (props) => {
  const menuItemStyle = {
    cursor: "pointer",
  };

  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-5 col-xs-12">
          <div className="row">
            <div className="map col-xs-12 col-md-4">
              <FontAwesomeIcon
                icon="map-marker-alt"
                size="3x"
              ></FontAwesomeIcon>
            </div>
            <div className="add col-xs-12 col-md-6">
              <h1>Don Bosko</h1>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="tel col-xs-12 col-md-4">
              <FontAwesomeIcon icon="phone" size="3x"></FontAwesomeIcon>
            </div>
            <div className="add col-xs-12 col-md-6">
              <h1>+355695796203</h1>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      <div className="col-md-7 col-xs-12">
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
  );
};
export default Footer;
