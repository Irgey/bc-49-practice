import {User} from '../user/User';

export const UserList = ({users}) => {
   return ( <ul>
        {users.map(({name, email, id}) => {
            return ( 
            <li key={id}>
                <User user={{name, email}}/>
            </li> 
            )
        })}
    </ul>
   )
}