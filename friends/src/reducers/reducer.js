import { FETCHING, FETCHED, FETCHED_FRIEND, ERROR, SAVING_FRIEND, FRIEND_SAVED, DELETING_FRIEND, FRIEND_DELETED, EDITING_FRIEND, FRIEND_EDITED } from "../actions/"

const initialState ={
  fetchingFriends: false,
  friendsFetched: false,
  friendSaved: false,
  savingFriend: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friend: [],
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

    case FETCHED_FRIEND:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friendSaved: false,
        savingFriend: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friend: action.payload,
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

    case DELETING_FRIEND:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: true,
        friendDeleted: false,
        error: null};

    case FRIEND_DELETED:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: true,
        error: null};

    case EDITING_FRIEND:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
        updatingFriend: true,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        error: null};

    case FRIEND_EDITED:
      return { ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
        updatingFriend: false,
        friendUpdated: true,
        deletingFriend: false,
        friendDeleted: true,
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
