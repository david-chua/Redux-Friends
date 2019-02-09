import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFriend, deleteFriend } from '../actions';


class Friend extends React.Component{

  componentDidMount(){
    this.props.getFriend(this.props.match.params.id);
  }

  deleteFriend = e => {
    e.preventDefault();
    this.props.deleteFriend(this.props.friend.id);
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <h1> Name: {this.props.friend.name}</h1>
        <h1> Age: {this.props.friend.age}</h1>
        <h1> Email: {this.props.friend.email} </h1>
        <button onClick={this.deleteFriend}> Delete Friend </button>
        <Link to={{pathname: `/friends/${this.props.friend.id}/edit`, state: {
            name: this.props.friend.name, age: this.props.friend.age, email: this.props.friend.email, id: this.props.friend.id, friends: this.props.friends }
          }}><button> Edit Friend</button></Link>
      </div>
    )
  }
}
  const mapStateToProps = function(state){
    return{
      friends: state.friends,
      friend: state.friend,
      fetching: state.fetchingFriends
    }
  }

export default connect(mapStateToProps, { getFriend, deleteFriend })(Friend);
