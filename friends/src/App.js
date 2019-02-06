import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getFriends } from './actions';

import FriendsList from './components/FriendsList'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    setTimeout(this.props.getFriends(), 5000);

  }
  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
        { this.props.fetching ? (
          <h2 className="loading"> Waiting for your friends list! </h2>
        ): null }
        <FriendsList friends={this.props.friends} />
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



export default connect(mapStateToProps, { getFriends })(App);
