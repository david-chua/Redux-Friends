import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import { connect } from "react-redux";
import { getFriends } from './actions';

import Navigation from './components/Navigation';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import CreateFriendForm from './components/CreateFriendForm';
import EditFriendForm from './components/EditFriendForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact path='/'
          component ={ FriendsList } />
        <Route
          path="/post"
          component= { CreateFriendForm } />
        <Route
          exact path="/friends/:id"
          render={(props) => <Friend
            { ...props }
            friends={this.props.friends}/>}
        />
        <Route
          exact path="/friends/:id/edit"
          render={(props) => <EditFriendForm
            { ...props }
            location = {this.props.location}
            friends = { this.props.friends }/>}
        />

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



export default withRouter(connect(mapStateToProps, { getFriends })(App));
