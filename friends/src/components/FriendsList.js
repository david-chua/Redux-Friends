import React from 'react';
import { Link } from 'react-router-dom'
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
          <h2 className="loading"> Waiting for your Friend's data! </h2>
        ): null }
        { this.props.deletingFriend ? (
          <h2 className="deleting"> Deleting my an enemy </h2>
        ): null}
        {this.props.friends.map((friend,index) => {
          return <div key={friend.id ? friend.id : index }>
                    <Link to={`friends/${ friend.id }`}><h1> Name: {friend.name} </h1></Link>
                    <h1> Age: {friend.age}</h1>
                    <h1> Email: {friend.email} </h1>
                  </div>
        })}
      </div>
    );
  }
}
const mapStateToProps = function(state){
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    deleting: state.deletingFriend
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList) ;
