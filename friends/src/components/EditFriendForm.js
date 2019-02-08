import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

import { connect } from "react-redux";
import { getFriend, editFriend } from '../actions';

export const MainFormDiv = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
`;

export const FormTitle = styled.div`
  background: #00BBC4;
  text-transform: uppercase;
  font-family: sans-serif;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  margin: -30px -30px 30px -30px;
`;

export const FormInput = styled.input`
  color: #00BBC4;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font: 18px Arial, Helvetica, sans-serif;
  height: 45px;
  :: placeholder{
    color: #00BBC4;
  }
`;

export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  margin-top: 26px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: white;
  background-color: #00BBC4;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
`;

class EditFriendForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mountedName:'',
      friendData: {
        name: '',
        email: '',
        age: '',
      },
      error: ''
    };
  }

  componentDidMount(){
    this.props.getFriend(this.props.match.params.id)
  }

  handleChange = e => {
    this.setState({
      friendData: {
        ...this.state.friendData,
        [e.target.name]: e.target.value
      }
    });
  }

  checkMissingfield = (newFriendData) => {
    console.log('testing');
    console.log(this.props.friend.name);
    if (this.state.friendData.name === ''){

    }

  }

  updateFriend = (e, id, friend) => {

    e.preventDefault();
    let friendToBeUpdated;
    if (!this.state.friendData.name && !this.state.friendData.email && !this.state.friendData.age){
      return this.setState({error: 'Nothing to change'})
    } else if (!this.state.friendData.name && !this.state.friendData.email){
      friendToBeUpdated = {
        name: this.props.friend.name,
        age: this.state.friendData.age,
        email: this.props.friend.email
      }
    }  else if (!this.state.friendData.name && !this.state.friendData.age){
      friendToBeUpdated = {
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.state.friendData.email
      }
    } else if (!this.state.friendData.email && !this.state.friendData.age){
      friendToBeUpdated = {
        name: this.state.friendData.name,
        age: this.props.friend.age,
        email: this.props.friend.email
      }
    } else if (!this.state.friendData.name){
      friendToBeUpdated = {
        name: this.props.friend.name,
        age: this.state.friendData.age,
        email: this.state.friendData.email
      }
    } else if (!this.state.friendData.age){
      friendToBeUpdated = {
        name: this.state.friendData.name,
        age: this.props.friend.age,
        email: this.state.friendData.email
      }
    } else if (!this.state.friendData.email){
      friendToBeUpdated = {
        name: this.state.friendData.name,
        age: this.state.friendData.age,
        email: this.props.friend.email
      }
    }
    console.log('after check', this.state.friendData)
    id = Number(this.props.match.params.id)
    // friend = this.state.friendData
    // console.log(friend)
    this.props.editFriend(id, friendToBeUpdated);
    this.props.history.push('/');
  }

  render(){
    return (
      <MainFormDiv>
        <FormTitle>PUT (edit) a  friend</FormTitle>
        <form onSubmit={this.updateFriend}>
          <FormInput
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.friendData.name}
          />
          <FormInput
            type="text"
            name="email"
            placeholder={this.props.friend.email}
            onChange={this.handleChange}
            value={this.state.friendData.email}
          />
          <FormInput
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.friendData.age}
          />
          <FormButton className="quotes-btn" type="submit">
            POST friend
          </FormButton>
        </form>
        {this.state.error ? (
          <div>
            <h1> {this.state.error}</h1>
          </div>
        ): null }
      </MainFormDiv>
    )
  }
}

const mapStateToProps = function(state){
  return {
    friend: state.friend,
    fetching: state.fetchingFriends,
  }
}


export default withRouter(connect(mapStateToProps, { getFriend, editFriend })(EditFriendForm));
