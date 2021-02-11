import React,{useState} from "react";
import {Dialog,TextInputField} from "evergreen-ui";
const Login = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const cleanVars=() => {
        setUsername("");setPasswd("");
    }
    return (
    <Dialog
    isShown={stats}
    title="Login"
    destroyOnClose={true}
    onCloseComplete={()=> {close();cleanVars()}}
    confirmLabel="Login"
    >
         <TextInputField
        label="Username"
        isInvalid={username===""}
        name="username"
        onChange={e => setUsername(e.target.value)}
        placeholder="example34"
        validationMessage={username===""?"This field is required":null}
        />
        <br/>
        <TextInputField
        label="Password"
        name="password"
        type="password"
        isInvalid={passwd===""}
        onChange={e => setPasswd(e.target.value)}
        validationMessage={passwd===""?"This field is required":null}
        placeholder="A_S3crET"
        />
    </Dialog>)
};
export default Login;