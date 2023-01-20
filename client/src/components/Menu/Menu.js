import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Menu = () => {
  return (
    <DropdownButton
      align="end"
      title="Menu"
      id="dropdown-menu-align-end"
      variant="success"
    >
      <Dropdown.Item>Dark Mode</Dropdown.Item>
      <Dropdown.Item>¿Why choose us?</Dropdown.Item>
      <Dropdown.Item>TIPs to Home</Dropdown.Item>
      <Dropdown.Item>Contact Us</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/account">Account</Dropdown.Item>
      {/*       <Dropdown.Item>Sign Off</Dropdown.Item> */}
    </DropdownButton>
  );
};

export default Menu;
