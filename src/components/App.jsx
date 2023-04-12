import { data } from '../data/users';
import { User } from '../components/user/User';
import { UserList } from './user-list/UserList';
import { Section } from './Section/Section';
import { Component } from 'react';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    isListShown: false,
    users: data,
  };
  showList = () => {
    this.setState({ isListShown: true });
  };
  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };
  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        <Section title="List Of Users">
          {!isListShown ? (
            <Button text="Show list of users" clickHandler={this.showList} />
          ) : (
            <UserList users={users} deleteUser={this.deleteUser} />
          )}
        </Section>
      </>
    );
  }
}
