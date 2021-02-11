import React,{useState} from "react";
import {Dialog,TextInputField,toaster} from "evergreen-ui";
const Login = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const cleanVars=() => {
        setUsername("");setPasswd("");
    }
    const submitData = () => {
        if (passwd.length<6 || username.length<3) {
            if(passwd.length<6) {toaster.danger("The password must be at least 6 characters");}
            if(username.length<3) {toaster.danger("The Username must be at least 3 characters");}
            if(passwd.length<6 && username.length<3) {
                toaster.danger("Both the Username and Password are too short");
            }
            return;
        }
    };
    return (
    <Dialog
    isShown={stats}
    title="Login"
    destroyOnClose={true}
    onConfirm = {submitData}
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