import React from 'react';
import Friend from './Friend';

import { connect } from "react-redux";
import { getFriends } from '../actions';

class FriendsList extends React.Component {
  componentDidMount(){
  this.props.getFriends();
  }

  render() {
    return (
      <div className="FriendsList">
        { this.props.fetching ? (
          <h2 className="loading"> Waiting for your friends list! </h2>
        ): null }
        {this.props.friends.map((friend,index) => {
          return <Friend key={friend.id? friend.id: index} friend={friend} />
        })}
      </div>
    );
  }
}
const mapStateToProps = function(state){
  return {
    friends: state.friends,
    fetching: state.fetchingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList) ;
