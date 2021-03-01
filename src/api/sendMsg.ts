import { client, q } from '../config/db';
import {toaster} from "evergreen-ui";
const sendMSG = ({username,content}) => client.query(
    q.Create(
        q.Collection("chats"),
        {
          data: {
            username:username,
            content:content,
            timestamp:Date.now(),
          }
        }
      )
)
.then(res=> {
    console.log(res);
    sessionStorage.setItem("currentUser",
    JSON.stringify({secret:res.secret,username:username}));
    close();
    return toaster.success(`Message sent!!${username}`)})
.catch(() => toaster.danger("Unable to send message, try later..."));
export default sendMSG;