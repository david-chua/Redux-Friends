import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getFriends } from '../actions';
import styled from 'styled-components';

const FriendsListDiv = styled.div`
  margin: 0 auto;
  width: 90%
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
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
`;

const NameDiv = styled.div`
  width: 200px;
`;

const NameInfo = styled.h1`
  font-size: 3em;
`;
const AgeDiv = styled.div`
  width: 200px;
`;

const AgeInfo = styled.h3`
  font-size: 1.4em;
`;
const EmailDiv = styled.div`
  width: 300px;
`;

const EmailInfo = styled.h3`
  font-size: 1.4em;
`;



class FriendsList extends React.Component {
  componentDidMount(){
  this.props.getFriends();
  }

  render() {
    return (
      <FriendsListDiv>
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
                    <Link to={`friends/${ friend.id }`}>
                       <NameDiv>
                        <NameInfo> {friend.name} </NameInfo>
                        </NameDiv>
                    </Link>
                    <AgeDiv>
                      <AgeInfo> {friend.age} yrs old</AgeInfo>
                    </AgeDiv>
                    <EmailDiv>
                      <EmailInfo> {friend.email}</EmailInfo>
                    </EmailDiv>
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
