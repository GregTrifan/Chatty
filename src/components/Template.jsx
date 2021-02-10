import React from "react";
import Navbar from "./navbar";
const Template = (props) => {
    return (
    <>
    <Navbar/>
    <div style={{textAlign:"center",padding:"20px"}}>
    {props.children}
    </div>
    </>
    );
}
export default Template;