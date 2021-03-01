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
    CommentIcon,
    Heading
    } from "evergreen-ui";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

import Login from "./auth/login";
import Register from "./auth/register";
import Logout from "./auth/logout";

import Logo from "../img/logo.png";
import "./navbar.less";
import randomGreet from "../misc/random-greet";

const Navbar =  () => {
  const user = JSON.parse(sessionStorage.getItem('currentUser'));
  console.log(user);
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
      <Menu.Group title={user?randomGreet(user.username):randomGreet("Guest")}>
      {user?
      <>
      <Menu.Divider/>
      <NavLink to="/general-chat">
      <Menu.Item icon={CommentIcon} intent="success" >General Chat</Menu.Item>
      </NavLink>
      <Menu.Item icon={LogOutIcon} onSelect={()=>setLogout(true)} intent="danger">Logout</Menu.Item>
      </>
      :
      <>
      <Menu.Item icon={LogInIcon} onSelect={()=>setLogin(true)}>Login</Menu.Item>
      <Menu.Item icon={AddIcon} onSelect={()=>setRegister(true)}>Register</Menu.Item>
      </>
      }
      </Menu.Group>
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
export default Navbar;