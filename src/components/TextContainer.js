import React from 'react';
import onlineIcon from '../icons/onlineIcon.png';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
      <h1 style={{ marginTop: '-40px' }}>
        Realtime Chat Application{' '}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h3>Created with React, Express, Node and Socket.IO</h3>
    </div>
    {users ? (
      <>
        <h4>People currently chatting in {room}:</h4>
        <div className="activeContainer">
          <ul>
            {users.map(({ name }) => (
              <>
                <div key={name} className="activeItem">
                  <li>
                    <img alt="Online Icon" src={onlineIcon} /> {name}
                  </li>
                </div>
              </>
            ))}
          </ul>
        </div>
      </>
    ) : null}
    <div className="giveThanks">
      Thanks to JavaScript Mastery for the tutorial. Check out their YouTube
      channel{' '}
      <a
        href="https://www.youtube.com/c/JavaScriptMastery"
        title="JavaScript Mastery YouTube Channel"
        target="_blank"
        rel="noreferrer"
      >
        here.
      </a>
    </div>
  </div>
);

export default TextContainer;
