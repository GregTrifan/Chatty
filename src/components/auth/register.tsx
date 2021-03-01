import React, { useState } from "react";
import {Dialog, TextInputField,toaster} from "evergreen-ui";
import {createUser} from "../../api";

const Register = ({stats,close}) => {
    const [username,setUsername] = useState("");
    const [passwd,setPasswd] = useState("");
    const [check,setCheck] = useState("");
    const [submitted,setSubmit] = useState(false);
    
    const cleanVars=() => {
        setUsername("");setPasswd("");setCheck("");setSubmit(false);
    }

    const submitData = () => {
        setSubmit(true);
        if (username.toLowerCase()==="guest") 
            return toaster.warning("Cmon, why would you use such a name 🤨 ?")
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
        createUser({username:username,passwd:passwd})
        .then(()=>toaster.success(`Account created sucessfully ${username} 🥳🥳!!`))
        .catch(() => toaster.danger("We have some internal problems 🤒, please try again later..."));
        return close();

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
        isInvalid={submitted&&username===""}
        onChange={e => setUsername(e.target.value)}
        placeholder="example34"
        validationMessage={submitted&&username===""?"This field is Required":null}
        />
        <TextInputField
        label="Your Password"
        name="password"
        type="password"
        isInvalid={submitted&&passwd===""}
        onChange={e => setPasswd(e.target.value)}
        validationMessage={submitted&&passwd===""?"This field is Required":null}
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