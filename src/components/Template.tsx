import React from "react";
import Navbar from "./navbar";

const Template = (props) => {
    return (
    <>
    <Navbar/>
    <div>
    {props.children}
    </div>
    </>
    );
}
export default Template;