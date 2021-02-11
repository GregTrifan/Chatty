import { Heading,Button,Pane,Text, TextInputField, Tooltip } from "evergreen-ui";
import moment from "moment";
import {motion} from "framer-motion";
import React, {useState} from "react";

const Home = () => {
    const [content,setContent] = useState([]);
    const [invalid,setInvalid] = useState(false);
    const [msg,setMsg] = useState([]);
    const sendMessage = () => {
      if (msg!=""&&msg!=undefined) {
        setContent([...content,{content:msg,time:Date.now()}]);
        setInvalid(false);
        return setMsg("");
      }
      return setInvalid(true);
    }
    return (

    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    >
      <Pane
      border
      elevation={4}
      margin={24}
      justifyContent="center"
      alignItems="center"
      padding="20px"
      >
    <Heading margin="default" size={600} color="dodgerblue">Send a Message</Heading>
    <TextInputField
    isInvalid={invalid}
    value={msg}
    onChange={(e) => setMsg(e.target.value)}
    label="Send a message"
    textAlign="left"
    name="msg"
    placeholder="Message contents"
    validationMessage={invalid?"This field is required":null}
   />
   <Button onClick={() => sendMessage()} appearance="primary" >Send Message</Button>
   </Pane>
   <Heading>Received Messages</Heading>

   {content.map(({content,time}) => {
     return (
     <Pane
     elevation={4}
     border
     margin={14}
     borderRadius="13px"
     padding="13px"
     textAlign="left"
     >
    <Heading>Sent at {moment(time).format("MMM Do YY")}</Heading>
    <Tooltip content={moment(time).format('LTS')}>
     <Text>{content}</Text>
     </Tooltip>
     </Pane>)
   })}
   </motion.div>
    );
}

export default Home;