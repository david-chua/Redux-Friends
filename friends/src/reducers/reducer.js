import { FETCHING, FETCHED, ERROR, SAVING_FRIEND, FRIEND_SAVED } from "../actions/"

const initialState ={
  fetchingFriends: false,
  friendsFetched: false,
  friendSaved: false,
  savingFriend: false,
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
        friendSaved: false,
        savingFriend: false,
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
        friendSaved: false,
        savingFriend: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: action.payload,
        error: null};
    case SAVING_FRIEND:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friendSaved: false,
        savingFriend: true,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        error: null};
    case FRIEND_SAVED:
    return { ...state,
      fetchingFriends: false,
      friendsFetched: false,
      friendSaved: true,
      savingFriend: false,
      updatingFriend: false,
      friendUpdated: false,
      deletingFriend: false,
      friendDeleted: false,
      friends: [...state.friends, action.payload],
      error: null};
    case ERROR:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
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
