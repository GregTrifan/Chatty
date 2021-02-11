import React,{useState} from "react";
import {Menu,
    HomeIcon,
    Popover,
    Position,
    IconButton,
    MenuIcon,
    LogOutIcon,
    LogInIcon,
    AddIcon,
    } from "evergreen-ui";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

import Login from "./auth/login";
import Register from "./auth/register";
import Logout from "./auth/logout";

import Logo from "../img/logo.png";
import "./navbar.less";

const Navbar =  () => {
  const user = localStorage.getItem('statsUser');
  const [logout,setLogout]=useState(false);
  const [login,setLogin]=useState(false);
  const [register,setRegister]=useState(false);
  const closeDiags = () => {
    setLogout(false);
    setLogin(false);
    setRegister(false);
  }
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
      {user?
      <>
      <Menu.Divider/>
      <Menu.Item icon={LogOutIcon} intent="danger">Logout</Menu.Item>
      </>
      :
      <>
      <Menu.Item icon={LogInIcon} onSelect={()=>setLogin(true)}>Login</Menu.Item>
      <Menu.Item icon={AddIcon} onSelect={()=>setRegister(true)}>Register</Menu.Item>
      </>
      }
      </Menu.Group>
    </Menu>
  }
>
  <IconButton marginRight={16} height={40} icon={MenuIcon} className="Menu" appearance="minimal"/>
</Popover>
<Login stats={login} close={closeDiags}/>
<Register stats={register} close={closeDiags}/>
<Logout stats={logout} close={closeDiags}/>
</nav>
    );
}
export default Navbar