import { client, q } from '../config/db';
const createUser = ({username,passwd}) => client.query(
    q.Create(
      q.Collection("users"),
      {
        credentials: {password: passwd},
        data: {
          username:username,
          timestamp:Date.now(),
        }
      }
    )
)
.then(ret => console.log(ret))
.catch(err => console.warn(err))


export default createUser;
 /*q.Create(
    q.Collection('users'),
    {
      data: {
      username:username,
      passwd:bcrypt.hashSync(passwd, 10),
      timestamp:Date.now()
      }
    },*/