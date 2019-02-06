import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FETCHED_FRIEND = "FETCHED_FRIEND";
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

export function getFriend(id){
  return dispatch => {
    dispatch({type: FETCHING });
    axios
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        dispatch({
          type: FETCHED_FRIEND,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "Unable to fetch friend"
        });
      });
  };
};

export function postFriend(friend){
  return dispatch => {
    dispatch({type: SAVING_FRIEND });
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        dispatch({
          type: FRIEND_SAVED,
          payload: response.data
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
