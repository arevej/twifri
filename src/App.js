import React from 'react';
import { css } from 'emotion';

import Closeness from './components/Closeness';
import Profile from './components/Profile';
import Search from './components/Search';


import data from './data';
import { colors } from './variables';

class App extends React.Component {
  state = {
    typingHandle: '',
    data: data,
    friends: [],
  }

  handleChange = evt => {
    this.setState({ typingHandle: evt.target.value })
  }

  showFriends = () => {
    const user = this.state.data.find(user => user.handle === this.state.typingHandle)
    if (user) {
      this.setState({ friends: user.getFriends() })
    }
  }

  getUser = (_handle) => {
    const user = this.state.data.find(user => user.handle === _handle);
    return user
  }

  render() {
    return (
      <div className={styles.container}>

        <div className={styles.header}>
          twifri
        </div>

        <Search
          value={this.state.typingHandle}
          onChange={this.handleChange}
          onClickButton={this.showFriends}
        />

        {this.state.friends.length !== 0 ? (
          <div className={styles.friends}>
            {this.state.friends.map((friend) => (
              <div className={styles.friends_item} key={friend.handle}>
                <Profile handle={friend.handle} avatarURL={this.getUser(friend.handle).avatarURL} />
                <Closeness level={friend.level} />
              </div>
            ))}
          </div>
        ) : (
            <div className={styles.friends_message}>Write a handle to know Twitter friends</div>
          )}

      </div >
    )
  }
}



const styles = {
  container: css`
      * {
        font-family: Helvetica;
      }
      a {
        text-decoration: none;
      }

      width: 600px;
      margin: 0 auto;
  `,

  header: css`
      color: ${colors.red};
      font-size: 60px;
      font-weight: 600;
      padding: 20px 0;
      text-align: center;
  `,

  friends: css`
      margin: 50px;
  `,

  friends_item: css`
      display: flex;
      align-items: center;
      padding: 15px 15px;
  `,
  friends_message: css`
      font-size: 26px;
      text-align: center;
      margin-top: 100px;
  `,

}



export default App;
