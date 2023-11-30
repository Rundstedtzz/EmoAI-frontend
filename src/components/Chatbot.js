// Chatbot.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Chatbot() {
  const location = useLocation();
  const { selectedType, selectedTrait, virtualFriendName } = location.state || {};

  return (
    <div>
      {/* Render your chatbot interface here */}
      <h1>Chat with {virtualFriendName}</h1>
      {/* ... */}
    </div>
  );
}

export default Chatbot;
