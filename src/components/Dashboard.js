// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  // Placeholder data, replace with real data from your backend or state management
  const user = {
    name: 'Username',
    avatar: '/path-to-your-avatar.jpg' // Replace with the path to your user's avatar image
  };

  const friends = [
    { name: 'Friend Name 1', avatar: '/path-to-friend-avatar1.jpg' },
    { name: 'Friend Name 2', avatar: '/path-to-friend-avatar2.jpg' },
    // Add more friends as needed
  ];

  // Handler for the button click
  const handleCreateFriendClick = () => {
    navigate('/create-friend'); // Navigate to the create-friend route
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-overlay"></div>
      <div className="dashboard-content">
        <div className="user-profile">
          <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
          <h2>{user.name}</h2>
        </div>
        <div className="virtual-friends-section">
          <h3>Your Virtual Friends</h3>
          <div className="friends-list">
            {friends.map(friend => (
              <div key={friend.name} className="friend">
                <img src={friend.avatar} alt={`${friend.name}'s avatar`} className="friend-avatar" />
                <h4>{friend.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <button className="create-friend-button" onClick={handleCreateFriendClick}>
          Create New Virtual Friend
        </button>
      </div>
    </div>
  );
}

export default Dashboard;


