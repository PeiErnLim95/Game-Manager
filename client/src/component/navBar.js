import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavBar = () => {

  return(
      <div>
        <Navbar id="nav-bar" color="light" expand="md">
          <NavbarBrand href="/">Game Manager</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  GAME
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Add Game
                  </DropdownItem>
                  <DropdownItem>
                    Search Game
                  </DropdownItem>
                  <DropdownItem>
                    View Games
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">USER</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  )
};

export default NavBar;