import { Heading,TextInput,FormField,Pane } from "evergreen-ui";
import React, {useState} from "react";

const Home = () => {
    const [msg,setMsg] = useState([]);
    return (
    <>
    <Heading size={900} margin="default">
    Home
    </Heading>

    <Heading margin="default" color="dodgerblue">Send a Message</Heading>
    <Pane clearfix>
    <Pane
    elevation={4}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    </Pane>
    </Pane>
    </>
    );
}

export default Home;