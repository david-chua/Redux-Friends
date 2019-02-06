import React from 'react';

function Friend(props){
  const friend = props.friend
  return (
    <div>
      <h1> Name: {friend.name} </h1>
      <h1> Age: {friend.age}</h1>
      <h1> Email: {friend.email} </h1>
    </div>

  )
}

export default Friend;
