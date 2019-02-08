import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getFriends } from '../actions';
import styled from 'styled-components';

const FriendsListDiv = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 300px
`;

const LoadingDiv = styled.div`
  border: 1px solid black;
  height: 150px;
`;

const LoadingParagraph = styled.h2`
  text-align: center;
`;

const ListContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const nameInfo = styled.h1`
  font-size: 40em;
`;


class FriendsList extends React.Component {
  componentDidMount(){
  this.props.getFriends();
  }

  render() {
    return (
      <FriendsListDiv>

        <ListContainer>
            <nameInfo> Ben </nameInfo>
            <h3> 30 yrs old</h3>
            <h3> ben@lambdaschool.com</h3>
          </ListContainer>

        { this.props.fetching ? (
          <LoadingDiv>
            <LoadingParagraph className="loading"> Waiting for your Friend's data! </LoadingParagraph>
            <div className="lds-heart"><div></div></div>
          </LoadingDiv>
        ): null }
        { this.props.deletingFriend ? (
          <LoadingDiv>
            <LoadingParagraph className="loading"> Deleting my an enemy </LoadingParagraph>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </LoadingDiv>
        ): null}
        {this.props.friends.map((friend,index) => {
          return <ListContainer key={friend.id ? friend.id : index }>
                    <Link to={`friends/${ friend.id }`}><h1> Name: {friend.name} </h1></Link>
                    <h1> Age: {friend.age}</h1>
                    <h1> Email: {friend.email} </h1>
                  </ListContainer>
        })}
      </FriendsListDiv>
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
