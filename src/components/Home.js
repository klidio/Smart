import Background1 from "../images/bg.jpg";
import { Button } from "reactstrap";
import Background2 from "../images/q.jpg";
import { Component } from "react";
import Process from "../images/process.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverVideoPlayer from "react-hover-video-player";

const Home = (props) => {
  const menuItemStyle = {
    cursor: "pointer",
  };
  return (
    <div className="mainPage">
      <div className="parallax info">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3 col-xs-12 msg">
            <h2>Smart Farming</h2>
            <p>
              Nowadays farmers are having a many problems with their farms,so we
              came with a solution for you smart farming will help farmers
              produce more using less thier resourses .
            </p>
            <ul>
              <li>Higher procuctivity</li>
              <li>Less field</li>
              <li>Warehouse farming</li>
              <li>Artificial light</li>
            </ul>
            <Button
              color="success"
              style={menuItemStyle}
              onClick={() => props.changeActiveMenuItem("ContactUs")}
            >
              Join now!
            </Button>
          </div>
          <div className="col-md-8 col-xs-12"></div>
        </div>
      </div>
      <div className="vid">
      <div className="intro">
        <h2>How does it works?</h2>
        <h4>
          Smart farming work through sensors. Farmers can monitor various
          conditions like soil moisture, water level, light, humidity,
          obstacles, and motion from anywhere by combining sensors, motion
          detectors, button camera, and wearable devices. The IoT-based smart
          farming automates the irrigation system and is highly efficient as
          compared to the conventional operations.
        </h4>
        <div className="video col-xs-12">
          <iframe
            width="500"
            height="500"
            src="https://www.youtube.com/embed/nYDsyr_OP1Y"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      </div>
      <div className="process">
        <div>
          <h1>Our services</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-12 step">
              <div className="partners-icon">
                <FontAwesomeIcon icon="tractor" size="5x"></FontAwesomeIcon>
              </div>
              <h3>Autonomous Tractor </h3>
              <p>
                Tractors are essential agricultural equipment that is used right
                from preparing the soil for planting seeds all the way to
                harvesting crops.
              </p>
            </div>
            <div className="col-md-3 col-sm-12 step">
              <div className="partners-icon">
                <FontAwesomeIcon icon="tint" size="5x"></FontAwesomeIcon>
              </div>
              <h3>Smart Irrigation</h3>
              <p>
                Some regions in the world are facing years-long drought
                conditions with minimal rainfall.
              </p>
            </div>
            <div className="col-md-3 col-sm-12 step">
              <div className="partners-icon">
                <FontAwesomeIcon icon="desktop" size="5x"></FontAwesomeIcon>
              </div>
              <h3>Livestock Monitoring</h3>
              <p>
                Tractors are essential agricultural equipment that is used right
                from preparing the soil for planting seeds all the way to
                harvesting crops.
              </p>
            </div>
            <div className="col-md-3 col-sm-12 step">
              <div className="partners-icon">
                <FontAwesomeIcon icon="dna" size="5x"></FontAwesomeIcon>
              </div>
              <h3>Genetic Editing</h3>
              <p>
                Plastomics is developing a new way to improve crops by making
                modifications to the plant’s genetic traits using its
                chloroplast rather than its nucleus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
