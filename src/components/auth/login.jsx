import React,{useState} from "react";
import {Dialog,TextInputField,toaster} from "evergreen-ui";
import {loginUser} from "../../api";

const Login = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const [submitted,setSubmit] = useState(false);
    const cleanVars=() => {
        setUsername("");setPasswd("");setSubmit(false);
    }
    const submitData = () => {
        setSubmit(true);
        if (passwd.length<6 || username.length<3) {
            if(passwd.length<6) {toaster.danger("The password must be at least 6 characters");}
            if(username.length<3) {toaster.danger("The Username must be at least 3 characters");}
            if(passwd.length<6 && username.length<3) {
                toaster.danger("Both the Username and Password are too short");
            }
            return;
        }
        loginUser({username:username,passwd:passwd,close:close});
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
        isInvalid={submitted&&username===""}
        name="username"
        onChange={e => setUsername(e.target.value)}
        placeholder="example34"
        validationMessage={submitted&&username===""?"This field is required":null}
        />
        <br/>
        <TextInputField
        label="Password"
        name="password"
        type="password"
        isInvalid={submitted&&passwd===""}
        onChange={e => setPasswd(e.target.value)}
        validationMessage={submitted&&passwd===""?"This field is required":null}
        placeholder="A_S3crET"
        />
    </Dialog>)
};
export default Login;