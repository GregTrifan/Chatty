import { client, q } from '../config/db';
import {toaster} from "evergreen-ui";
const getMsg = () => client.query(
    q.Paginate(
        q.Match(
            q.Ref('')
        )
    )
)