import { FETCHING, FETCHED, ERROR } from "../actions/"

const initialState ={
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export function reducer(state = initialState, action){
  switch(action.type){
    case FETCHING:
      return { ...state,
        fetchingFriends: true,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null };
    case FETCHED:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: action.payload,
        error: null};
    case ERROR:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: action.payload};
    default:
      return state;
  }
}
