import React, { useState, useEffect } from 'react';
import { getChatbotResponse } from './ChatbotAPI'; // Make sure to implement getChatbotResponse
import Header from '../chatbot_components/Header';
import Messages from '../chatbot_components/Messages';
import Input from '../chatbot_components/Input';
import '../chatbot_components/styles.css';
import { useLocation } from 'react-router-dom';


function Chatbot() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedType, selectedTrait, virtualFriendName, customPrompt, avatarUrl} = location.state || {};
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [showModelSelection, setShowModelSelection] = useState(true);


  // URLs for avatars from the public/avatars folder or a suitable path
  const userAvatarUrl = '/avatars/userAvatar.png'; // Update with the actual path
  // const botAvatarUrl = '/avatars/botAvatar.png'; // Update with the actual path
  const botAvatarUrl = avatarUrl;
  // Fetch the initial welcome message from the bot
  // useEffect(() => {
  //   async function fetchWelcomeMessage() {
  //     setIsLoading(true);
  //     const welcomeMessage = await getChatbotResponse('', selectedType, selectedTrait, virtualFriendName, customPrompt, selectedModel); // Fetch welcome message
  //     setMessages(prevMessages => [...prevMessages, { type: 'bot', text: welcomeMessage, avatar: botAvatarUrl }]);
  //     setIsLoading(false);
  //   }

  //   fetchWelcomeMessage();
  // }, []);

  useEffect(() => {
    async function fetchWelcomeMessage() {
      setIsLoading(true);
      const welcomeMessage = await getChatbotResponse('', selectedType, selectedTrait, virtualFriendName, customPrompt, selectedModel);
      setMessages(prevMessages => [...prevMessages, { type: 'bot', text: welcomeMessage, avatar: botAvatarUrl }]);
      setIsLoading(false);
    }

    if (!showModelSelection) {
      fetchWelcomeMessage();
    }
  }, [showModelSelection]);

  const handleConfirm = async () => {
    setShowModelSelection(false);
  };
  const sendMessage = async (text) => {
    if (!text.trim()) return; // Prevent sending empty messages

    // Append the user message to the chat
    const userMessage = { type: 'user', text, avatar: userAvatarUrl };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    setIsLoading(true);

    const response = await getChatbotResponse(text); // Fetch the bot response
    // Append the bot message to the chat
    setMessages(prevMessages => [...prevMessages, { type: 'bot', text: response, avatar: botAvatarUrl }]);
    
    setIsLoading(false);
  };

  // return (
  //   <div className="chatbot-container">
  //     <Header friendName={virtualFriendName} />
  //     {/* <Header /> */}
  //     <Messages 
  //       messages={messages}
  //       userAvatar={userAvatarUrl}
  //       botAvatar={botAvatarUrl}
  //     />
  //     <Input onSend={sendMessage} />
  //   </div>
  // );
  return (
    <div className="chatbot-container">
      <Header friendName={virtualFriendName} />
      
      {showModelSelection && (
        <div>
          <div className="model-selection">
            <button onClick={() => setSelectedModel('gpt-3.5')}>Use GPT-3.5</button>
            <button onClick={() => setSelectedModel('gpt-4')}>Use GPT-4</button>
          </div>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
  
      {/* Rest of your component */}
      <Messages 
        messages={messages}
        userAvatar={userAvatarUrl}
        botAvatar={botAvatarUrl}
      />
      <Input onSend={sendMessage} />
    </div>
  );
  
}

export default Chatbot;