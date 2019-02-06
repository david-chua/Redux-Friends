import React from 'react';
import { connect } from 'react-redux';
import { getFriend } from '../actions';

class Friend extends React.Component{

  componentDidMount(){
    this.props.getFriend(this.props.match.params.id);
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <h1> Name: {this.props.friend.name}</h1>
        <h1> Age: {this.props.friend.age}</h1>
        <h1> Email: {this.props.friend.email} </h1>
      </div>
    )
  }
}
  const mapStateToProps = function(state){
    return{
      friend: state.friend,
      fetching: state.fetchingFriends
    }
  }

export default connect(mapStateToProps, { getFriend })(Friend);
