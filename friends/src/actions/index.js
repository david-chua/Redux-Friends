import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVING_FRIEND = "SAVING_FRIEND"
export const FRIEND_SAVED = "FRIEND_SAVED"
export const ERROR = "ERROR";


export function getFriends(){
  return dispatch => {
    dispatch({type: FETCHING });
    axios
      .get("http://localhost:5000/api/friends")
      .then(response => {
        dispatch({
          type: FETCHED,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "You have no friends"
        });
      });
  };
};

export function postFriend(friendData){
  let newFriend = {
    id: Date.now(),
    name: friendData.name,
    age: friendData.age,
    email: friendData.email
  }
  return dispatch => {
    dispatch({type: SAVING_FRIEND });
    axios
      .post("http://localhost:5000/api/friends")
      .then(response => {
        dispatch({
          type: FRIEND_SAVED,
          payload: newFriend
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "Unable to save friend"
        });
      });
  };
};
