import { Component } from "react";
import { Button } from "reactstrap";

class Contact extends Component {
    getNewContact = () => {
        alert("We got your application and will contact you as soon as possible");
      };
  render() {
    return (
      <div className="section">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="contactForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12 ">
                <input id="fName" type="text" placeholder="First name"></input>
              </div>
              <div className="col-md-6 col-sm-12">
                <input id="lName" type="text" placeholder="Last name"></input>
              </div>
            </div>
            <div>
              <input id="email" type="text" placeholder="Email"></input>
            </div>
            <div>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Phone number"
              ></input>
            </div>
            <div>
              <textarea id="notes" placeholder="Notes" rows="6">
              </textarea>
              <div></div>
              <div className="finish">
                <Button id="done" color="primary" onClick={this.getNewContact}>
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
