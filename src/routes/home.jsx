import { Heading,Button,Pane,Text, TextInputField, Tooltip } from "evergreen-ui";
import moment from "moment";
import {motion} from "framer-motion";
import React, {useState} from "react";


const Home = () => {
    console.log(localStorage.getItem("Notes"))
    const Hardened = localStorage.getItem("Notes")===null?[]:JSON.parse(localStorage.getItem("Notes"));
    const [content,setContent]=useState(Hardened);
    const [invalid,setInvalid] = useState(false);
    const [msg,setMsg] = useState([]);

    const deleteNote = (index) => {
      console.log(content.length);
      if (content.length==1) {
        setContent([]);
        return localStorage.setItem("Notes",JSON.stringify([]));
      }
      setContent(content.filter(
        (elem)=> index !== content.indexOf(elem) 
      ));
      console.log(content,index);
      localStorage.setItem("Notes",JSON.stringify(content));
    }
    const sendNote = () => {
      if (msg!=""&&msg!=undefined) {
        setContent([...content,{content:msg,time:Date.now()}]);
        localStorage.setItem("Notes",JSON.stringify(content));
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
      borderRadius="12px"
      margin={24}
      justifyContent="center"
      alignItems="center"
      padding="20px"
      >
    <Heading margin="default" size={800} color="#05558C" className="cursive">Store Notes</Heading>
    <TextInputField
    isInvalid={invalid}
    value={msg}
    onChange={(e) => setMsg(e.target.value)}
    label="Write a Note"
    textAlign="left"
    name="note"
    placeholder="Note contents"
    validationMessage={invalid?"This field is required":null}
   />
   <Button onClick={() => sendNote()} appearance="primary" >Store Note</Button>
   </Pane>
   <Heading textAlign="left" paddingLeft="22px">Stored Notes</Heading>

   {content.map(({content,time},index) => {
     return (
       <motion.div
      key={index}
      initial={{ width:"0%",opacity:"0%" }}
      animate={{ width:"100%",opacity:"100%" }}
       >
     <Pane
     elevation={4}
     border
     margin={14}
     borderRadius="13px"
     padding="16px"
     textAlign="left"
     >
    <Heading>#{index+1}</Heading>
    <Tooltip content={`${moment(time).format("MMM Do YY")} at ${moment(time).format('LTS')}`}>
     <Text>{content}</Text>
     </Tooltip>
     <Button appearance="primary" onClick={()=>deleteNote(index)} intent="danger" style={{float:"right"}}>Delete note</Button>
     </Pane>
     </motion.div>
     )
   })}
   </motion.div>
    );
}

export default Home;