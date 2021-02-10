import React from "react";
import {Menu,
    PeopleIcon,
    HomeIcon,
    Popover,
    Position,
    IconButton,
    MenuIcon
    } from "evergreen-ui";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import Logo from "../img/logo.png";
import "./navbar.less";

const Navbar =  () => {
    return (
        <nav className="navbar">
          <NavLink to="/">
            <motion.img 
            src={Logo} 
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            className="Logo" alt=""
            /></NavLink>
        <Popover
  position={Position.BOTTOM_LEFT}
  content={
    <Menu>
      <Menu.Group>
          <NavLink to="/">
      <Menu.Item icon={HomeIcon}>Home</Menu.Item>
      </NavLink>
      <Menu.Divider />
      </Menu.Group>
    </Menu>
  }
>
  <IconButton marginRight={16} height={40} icon={MenuIcon} className="Menu" appearance="minimal"/>
</Popover>
</nav>
    );
}
export default Navbar