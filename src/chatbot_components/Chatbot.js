// Chatbot.js good one
import React, { useState, useEffect } from 'react';
import { getChatbotResponse } from './ChatbotAPI'; // Make sure to implement getChatbotResponse
import Header from '../chatbot_components/Header';
import Messages from '../chatbot_components/Messages';
import Input from '../chatbot_components/Input';
// You may choose to import a Loader if you wish to show a loading state
import '../chatbot_components/styles.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // URLs for avatars from the public/avatars folder or a suitable path
  const userAvatarUrl = '/avatars/userAvatar.png'; // Update with the actual path
  const botAvatarUrl = '/avatars/botAvatar.png'; // Update with the actual path

  // Fetch the initial welcome message from the bot
  useEffect(() => {
    async function fetchWelcomeMessage() {
      setIsLoading(true);
      const welcomeMessage = await getChatbotResponse(''); // Fetch welcome message
      setMessages(prevMessages => [...prevMessages, { type: 'bot', text: welcomeMessage, avatar: botAvatarUrl }]);
      setIsLoading(false);
    }

    fetchWelcomeMessage();
  }, []);

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

  return (
    <div className="chatbot-container">
      <Header />
      <Messages 
        messages={messages}
        userAvatar={userAvatarUrl}
        botAvatar={botAvatarUrl}
      />
      {/* Uncomment Loader below if you have a Loader component */}
      {/* {isLoading && <Loader />} */}
      <Input onSend={sendMessage} />
    </div>
  );
}

export default Chatbot;


// import React, { useState, useEffect } from 'react';
// import Header from '../chatbot_components/Header';
// import Messages from '../chatbot_components/Messages';
// import Input from '../chatbot_components/Input';
// import '../chatbot_components/styles.css';

// function Chatbot(props) {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const userAvatarUrl = '/avatars/userAvatar.png';
//   const botAvatarUrl = '/avatars/botAvatar.png';

//   useEffect(() => {
//     // Fetch the initial welcome message here if needed
//   }, []);

//   const sendMessage = async (text) => {
//     if (!text.trim()) return;

//     const userMessage = { type: 'user', text, avatar: userAvatarUrl };
//     setMessages(prevMessages => [...prevMessages, userMessage]);
    
//     setIsLoading(true);

//     // Construct the payload
//     const payload = {
//         message: text,
//         friend_mbti: props.selectedType // Assuming the MBTI type is passed as a prop
//     };

//     try {
//       const response = await fetch('/chat/chat_response/', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setMessages(prevMessages => [...prevMessages, { type: 'bot', text: data.message, avatar: botAvatarUrl }]);
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle the error appropriately in the UI
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <Header />
//       <Messages 
//         messages={messages}
//         userAvatar={userAvatarUrl}
//         botAvatar={botAvatarUrl}
//       />
//       {/* Uncomment Loader below if you have a Loader component */}
//       {/* {isLoading && <Loader />} */}
//       <Input onSend={sendMessage} />
//     </div>
//   );
// }

// export default Chatbot;



// // Chatbot.js
// import React, { useState, useEffect } from 'react';
// import { getChatbotResponse } from './ChatbotAPI'; // Make sure to implement getChatbotResponse
// import Header from '../chatbot_components/Header';
// import Messages from '../chatbot_components/Messages';
// import Input from '../chatbot_components/Input';
// // You may choose to import a Loader if you wish to show a loading state
// import '../chatbot_components/styles.css';

// function Chatbot(props) {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // URLs for avatars from the public/avatars folder or a suitable path
//   const userAvatarUrl = '/avatars/userAvatar.png'; // Update with the actual path
//   const botAvatarUrl = '/avatars/botAvatar.png'; // Update with the actual path

//   // Fetch the initial welcome message from the bot
//   // useEffect(() => {
//   //   async function fetchWelcomeMessage() {
//   //     setIsLoading(true);
//   //     const welcomeMessage = await getChatbotResponse(''); // Fetch welcome message
//   //     setMessages(prevMessages => [...prevMessages, { type: 'bot', text: welcomeMessage, avatar: botAvatarUrl }]);
//   //     setIsLoading(false);
//   //   }

//   //   fetchWelcomeMessage();
//   // }, []);

//   const sendMessage = async (text) => {
//     if (!text.trim()) return;
  
//     const userMessage = { type: 'user', text, avatar: userAvatarUrl };
//     setMessages(prevMessages => [...prevMessages, userMessage]);
    
//     setIsLoading(true);
  
//     try {
//       const responseText = await getChatbotResponse(text, props.selectedType);
//       setMessages(prevMessages => [...prevMessages, { type: 'bot', text: responseText, avatar: botAvatarUrl }]);
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle the error appropriately in the UI
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <Header />
//       <Messages 
//         messages={messages}
//         userAvatar={userAvatarUrl}
//         botAvatar={botAvatarUrl}
//       />
//       {/* Uncomment Loader below if you have a Loader component */}
//       {/* {isLoading && <Loader />} */}
//       <Input onSend={sendMessage} />
//     </div>
//   );
// }

// export default Chatbot;





// import React, { useState, useEffect } from 'react';
// import { getChatbotResponse } from './ChatbotAPI'; // Make sure to implement getChatbotResponse
// import { useLocation } from 'react-router-dom'; 
// import Header from '../chatbot_components/Header';
// import Messages from '../chatbot_components/Messages';
// import Input from '../chatbot_components/Input';
// // You may choose to import a Loader if you wish to show a loading state
// import '../chatbot_components/styles.css';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const location = useLocation();
//   const { selectedType, selectedTrait, virtualFriendName } = location.state || {};
//   console.log("selectedType:", selectedType); 

//   // URLs for avatars from the public/avatars folder or a suitable path
//   const userAvatarUrl = '/avatars/userAvatar.png'; // Update with the actual path
//   const botAvatarUrl = '/avatars/botAvatar.png'; // Update with the actual path

//   // Fetch the initial welcome message from the bot
//   useEffect(() => {
//     async function fetchWelcomeMessage() {
//       setIsLoading(true);
//       const welcomeMessage = await getChatbotResponse(''); // Fetch welcome message
//       setMessages(prevMessages => [...prevMessages, { type: 'bot', text: welcomeMessage, avatar: botAvatarUrl }]);
//       setIsLoading(false);
//     }

//     fetchWelcomeMessage();
//   }, []);

//     // In your Chatbot component in React
//   const sendMessage = async (text, selectedType) => {
//     if (!text.trim()) return;

//     const payload = {
//         message: text,
//         selectedType: selectedType  // Include the selectedType in the request body
//     };

//     try {
//         const response = await fetch('/chat/chat_response/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Process the response data...
//     } catch (error) {
//         console.error('Error:', error);
//     }
//   };
//   return (
//     <div className="chatbot-container">
//       <Header />
//       <Messages 
//         messages={messages}
//         userAvatar={userAvatarUrl}
//         botAvatar={botAvatarUrl}
//       />
//       {/* Uncomment Loader below if you have a Loader component */}
//       {/* {isLoading && <Loader />} */}
//       <Input onSend={sendMessage} />
//     </div>
//   );
// }

// export default Chatbot;