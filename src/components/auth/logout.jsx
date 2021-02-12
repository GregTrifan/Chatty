import React from "react";
import {Dialog, toaster} from "evergreen-ui";
import {logout} from "../../api";
const Logout = ({stats,close}) => {
    const leave = () => {
        logout();
        toaster.success("Logged out!");
        close();
    }
    return (
    <Dialog
    isShown={stats}
    destroyOnClose={true}
    title="Logout"
    onCloseComplete={()=> close()}
    onConfirm={leave}
    confirmLabel="Yes, Sign out"
    intent="danger"
    >
        Are you sure you want to do this?
    </Dialog>
        );
};
export default Logout;