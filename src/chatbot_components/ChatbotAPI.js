// ChatbotAPI.js

export const getChatbotResponse = async (message) => {
  try {
    const response = await fetch('http://localhost:8000/chat/chat_response/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include other headers as required, e.g., Authorization if needed
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Could not get chatbot response:', error);
    return "Sorry, I couldn't understand that.";
  }
};

export default { getChatbotResponse };

// ChatbotAPI.js
// export const getChatbotResponse = async (userMessage, mbtiType) => {
//   const payload = {
//       message: userMessage,
//       friend_mbti: mbtiType
//   };

//   // Make the API call
//   const response = await fetch('/chat/chat_response/', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data.message;
// };


