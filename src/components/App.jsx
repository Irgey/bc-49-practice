import {data} from '../data/users';
import {User} from '../components/user/User';
import {UserList} from '../components/user-list/UserList';


export const App = () => {
  return (
    <>
    <User user={data[0]}/>
    <UserList users={data}/>
    </>
  );
};
