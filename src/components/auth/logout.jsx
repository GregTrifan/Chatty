import React from "react";
import {Dialog} from "evergreen-ui";
const Logout = ({stats,close}) => {
    return (
    <Dialog
    isShown={stats}
    destroyOnClose={true}
    title="Login"
    onCloseComplete={()=> close()}
    confirmLabel="Login"
    >
        Are you sure you want to do this?
    </Dialog>
        );
};
export default Logout;