import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './CreateFriend.css'; // Make sure to link the correct CSS file

// Define the MBTI types and their corresponding button colors
const mbtiTypes = [
  { types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'], color: 'lightpurple' },
  { types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'], color: 'lightgreen' },
  { types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'], color: 'lightyellow' },
  { types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'], color: 'lightblue' },
];

function CreateFriend() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTrait, setSelectedTrait] = useState('');
  const [virtualFriendName, setVirtualFriendName] = useState('');
  const [isReadyToChat, setIsReadyToChat] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Update the isReadyToChat state based on the current selections
    setIsReadyToChat(!!(selectedType && selectedTrait && virtualFriendName.trim()));
  }, [selectedType, selectedTrait, virtualFriendName]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setVirtualFriendName('');
    setSelectedTrait('');
  };

  const handleTraitClick = (trait) => {
    setSelectedTrait(trait);
    setVirtualFriendName('');
  };

  const startChat = () => {
    // Navigate to the chatbot page with state
    navigate('/chatbot', { state: { selectedType, selectedTrait, virtualFriendName } });
  };

  // Conditional rendering for avatar path
  const avatarPath = selectedType && selectedTrait
    ? `/avatars/${selectedType}-${selectedTrait}.png`
    : '/avatars/default-avatar.png';

  return (
    <div className="create-friend-container">
      <div className="selection-container">
        <div className="mbti-types">
          {mbtiTypes.map((group, index) => (
            <div key={index} className="mbti-row">
              {group.types.map((type) => (
                <button
                  key={type}
                  className={`mbti-button ${group.color} ${selectedType === type ? 'selected' : ''}`}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="traits">
          <button 
            className={`trait-button ${selectedTrait === 'Assertive' ? 'selected' : ''}`}
            onClick={() => handleTraitClick('Assertive')}
          >
            Assertive
          </button>
          <button 
            className={`trait-button ${selectedTrait === 'Turbulent' ? 'selected' : ''}`}
            onClick={() => handleTraitClick('Turbulent')}
          >
            Turbulent
          </button>
        </div>
      </div>
      <div className="avatar-and-name-container">
        <div className="avatar-display">
          <img src={avatarPath} alt="Avatar" />
        </div>
        <input 
          type="text" 
          placeholder="Name your virtual friend" 
          className="friend-name-input"
          value={virtualFriendName}
          onChange={(e) => setVirtualFriendName(e.target.value)}
        />
        {isReadyToChat && (
          <button className="start-chat-button" onClick={startChat}>
            Start Chat
          </button>
        )}
      </div>
    </div>
  );
}

export default CreateFriend;
