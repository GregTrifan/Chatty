import { client, q } from '../config/db';

const logout = () => {
client.query(q.Logout(true)).then(res => console.log(res));
sessionStorage.removeItem("currentUser");
}

export default logout;