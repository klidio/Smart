// style={menuItemStyle}
// onClick={() => props.changeActiveMenuItem("Home")}


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar light expand="md">
        <NavbarBrand href="/">Smart Farming</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={() => props.changeActiveMenuItem("Home")} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  onClick={() => props.changeActiveMenuItem("Members")}>Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  onClick={() => props.changeActiveMenuItem("Contact")} >Contact</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;