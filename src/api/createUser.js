import { client, q } from '../config/db';
const createUser = ({username,passwd}) => client.query(
  q.Create(
    q.Collection('users'),
    {
      data: {
      username:username,
      passwd:btoa(passwd),
      timestamp:Date.now()
      }
    },
  )
)
.then(ret => ret)
.catch(err => console.warn(err))


export default createUser;