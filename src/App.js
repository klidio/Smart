import "./App.css";
import React, { Component } from "react";
import Header from "./panels/Header";
import Home from "./components/Home";
import Members from "./components/Members";
import ContactUs from "./components/ContactUs";
import Footer from "./panels/Footer";
import './components/FontAwesomeIcons';

class App extends Component {
  state = {
    active: "Home",
    /* employees:[] */
    
  }; 
  changeActiveMenuItem = (activeItem) => {
    this.setState({
      ...this.state,
      active: activeItem,
    });
  }; 
 /*  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ employee: users }))
  } */
  render() {
    /* const { employee } = this.state;
    const filterEmplyee = employee.filter((employee) => {
      return employee.name
        .toLowerCase()
    }); */


    return (
      <div>
        <Header changeActiveMenuItem={this.changeActiveMenuItem}></Header>
        {this.state.active === "Home" ? (
          <Home
            changeActiveMenuItem={this.changeActiveMenuItem}>
          </Home>
        ) : this.state.active === "Members" ? (
          <Members ></Members>
        ) : this.state.active === "Contact" ?(
          <ContactUs getNewContact={this.state.getNewContact}
          ></ContactUs>
        ) : 
        <Home
            changeActiveMenuItem={this.changeActiveMenuItem}>
          </Home>
      }
        <Footer changeActiveMenuItem={this.changeActiveMenuItem}></Footer>         
      </div>
    )
  }
}

export default App;
