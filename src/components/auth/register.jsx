import React, { useState } from "react";
import {Dialog, TextInputField,toaster} from "evergreen-ui";
const Register = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const [check,setCheck] = useState("");
    const cleanVars=() => {
        setUsername("");setPasswd("");setCheck("");
    }
    const submitData = () => {
        if (check!==passwd) {
            return toaster.danger("The passwords aren't the same!");
        }
        if (passwd.length<6 || username.length<3) {
            if(passwd.length<6) toaster.danger("The password must be at least 6 characters");
            if(username.length<3) toaster.danger("The Username must be at least 3 characters");
            if(passwd.length<6 && username.length<3) {
                toaster.danger("Both the Username and Password are too short");
            }
            return;
        }
    };
    return (
        <Dialog
    isShown={stats}
    destroyOnClose={true}
    title="Register"
    onCloseComplete={()=> {
        close();cleanVars()
    }}
    onConfirm = {submitData}
    confirmLabel="Register"
    >
        <TextInputField
        label="Username"
        name="username"
        isInvalid={username===""}
        onChange={e => setUsername(e.target.value)}
        placeholder="example34"
        validationMessage={username===""?"This field is required":null}
        />
        <TextInputField
        label="Your Password"
        name="password"
        type="password"
        isInvalid={passwd===""}
        onChange={e => setPasswd(e.target.value)}
        validationMessage={passwd===""?"This field is required":null}
        placeholder="A_S3crET"
        />
        <TextInputField
        label="Verify Password"
        name="password_check"
        type="password"
        isInvalid={check!==passwd}
        onChange={e => setCheck(e.target.value)}
        placeholder="Repeat Password"
        validationMessage={check!==passwd?"The Passwords aren't the same":null}
        />
    </Dialog>
    );
};
export default Register;