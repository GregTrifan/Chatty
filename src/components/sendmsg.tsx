import { Button, Pane, TextInputField,DrawIcon } from "evergreen-ui";
import React, {useState} from "react";
import {FiSend} from "react-icons/fi"
const SendMsg = () => {
    const Send = () => {
        console.log("sent!");
    }
    return (
        <Pane
        display="flex"
        elevation={4}
        backgroundColor="#9CB9E9"
        justifyContent="center"
        borderRadius={10}
        padding={10}
        >
        <TextInputField width="80%" margin="10px" placeholder="Write a message"/>
        <Button 
        height={37} appearance="primary" 
        margin="10px" borderRadius={20}
        onClick={()=> Send()}
        ><FiSend/></Button>    
        </Pane>
    );
}
export default SendMsg;