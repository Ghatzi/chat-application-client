import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleClick = () => {
    if (!name || !room) {
      alert('Username and room are required.');
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="button mt-20"
            type="submit"
            title="Enter Chat Room"
            onClick={handleClick}
          >
            Enter Chat
          </button>
        </Link>
      </div>
    </div>
  );
}
