import React, { useState } from "react";
import {Dialog, TextInputField} from "evergreen-ui";
const Register = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const [check,setCheck] = useState("");
    const cleanVars=() => {
        setUsername("");setPasswd("");setCheck("");
    }
    return (
        <Dialog
    isShown={stats}
    destroyOnClose={true}
    title="Register"
    onCloseComplete={()=> {
        close();cleanVars()
    }}
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