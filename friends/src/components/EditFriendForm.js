import React from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";

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
      friendData: {
        name: '',
        email: '',
        age: '',
      },
      error: ''
    };
  }

  componentDidMount(){
    let name;
    let email;
    let age;
    const id = this.props.location.state.id;
    if (id){
      name = this.props.location.state.name;
      email = this.props.location.state.email;
      age = this.props.location.state.age;

      this.setState({
        friendData: {
          ...this.state.friendData,
          name: name,
          age: age,
          email: email
        }
      })
    }
  }

  handleChange = e => {
    this.setState({
      friendData: {
        ...this.state.friendData,
        [e.target.name]: e.target.value
      }
    });
  }

  render(){
    console.log(this.state)
    const friend = this.props.location.state;
    return (
      <MainFormDiv>
        <FormTitle>PUT (edit) a  friend</FormTitle>
        <form>
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
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.friendData.email}
          />
          <FormInput
            type="text"
            name="age"
            placeholder="height"
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


export default connect(null)(EditFriendForm);
