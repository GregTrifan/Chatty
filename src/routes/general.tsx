import React, {useState,useEffect} from "react";
import { Heading,Button,Pane,Text, TextInputField, Tooltip } from "evergreen-ui";
import {motion} from "framer-motion";
import Messages from "../components/messages";

export const General = () => {
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        console.log(user);
       if (!user) {
           console.log("OUT!")
         return window.location.href = "/";
        }
      }, []);
    return (
        <motion.div
        initial={{ scale: 3}}
        animate={{ scale: 1 }}
        >
    <div>
        <Pane
        display="flex"
        alignItems="left"
        elevation={4}
        backgroundColor="#CFDDFF"
        borderRadius={10}
        padding={10}
        margin={12}
        flexDirection="column"
        >
        <Pane
        display="flex"
        alignItems="left"
        elevation={4}
        backgroundColor="#9CB8D9"
        borderRadius={10}
        padding={10}
        flexDirection="column"
        >
            <Heading>General Chat</Heading>
            <Text>Chat & meet new people</Text>
        </Pane>
            <Messages/>
        </Pane>
    </div>
    </motion.div>
    );
}