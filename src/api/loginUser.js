import { client, q } from '../config/db';
import {toaster} from "evergreen-ui";
const loginUser = ({username,passwd,close}) => client.query(
    q.Login(
        q.Match(q.Index("by_username"),username),
        { password: passwd},
    )
)
.then(res=> {
    console.log(res);
    sessionStorage.setItem("currentUser",
    JSON.stringify({secret:res.secret,username:username}));
    close();
    return toaster.success(`Welcome, ${username}`)})
.catch(() => toaster.danger("Authentication failed, please check your credentials"));
export default loginUser;