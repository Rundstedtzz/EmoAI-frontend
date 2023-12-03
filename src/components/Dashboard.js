// // Dashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './Dashboard.css';

// function Dashboard() {
//   const navigate = useNavigate();

//   // Placeholder data, replace with real data from your backend or state management
//   const user = {
//     name: 'Username',
//     avatar: '/path-to-your-avatar.jpg' // Replace with the path to your user's avatar image
//   };

//   const friends = [
//     { name: 'Friend Name 1', avatar: '/path-to-friend-avatar1.jpg' },
//     { name: 'Friend Name 2', avatar: '/path-to-friend-avatar2.jpg' },
//     // Add more friends as needed
//   ];

//   // Handler for the button click
//   const handleCreateFriendClick = () => {
//     navigate('/create-friend'); // Navigate to the create-friend route
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-overlay"></div>
//       <div className="dashboard-content">
//         <div className="user-profile">
//           <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
//           <h2>{user.name}</h2>
//         </div>
//         <div className="virtual-friends-section">
//           <h3>Your Virtual Friends</h3>
//           <div className="friends-list">
//             {friends.map(friend => (
//               <div key={friend.name} className="friend">
//                 <img src={friend.avatar} alt={`${friend.name}'s avatar`} className="friend-avatar" />
//                 <h4>{friend.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button className="create-friend-button" onClick={handleCreateFriendClick}>
//           Create New Virtual Friend
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const { username } = useParams(); // Extract username from URL
  const [user, setUser] = useState(null); // State to store user data
  const [friends, setFriends] = useState([]); // State to store friends data

  useEffect(() => {
    // Fetch user-specific data using the username and token
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Retrieve the stored token
      if (token) {
        try {
          const response = await fetch(`http://localhost:8000/dashboard/${username}/`, { // Make sure the endpoint is correct
            headers: {
              'Authorization': `Token ${token}`
            }
          });

          // if (response.ok) {
          //   const data = await response.json();
          //   setUser(data.user);
          //   setFriends(data.friends); // Assuming the endpoint returns an object with user and friends data
          // } else {
          //   throw new Error('Failed to fetch data');
          // }
          if (response.ok) {
            const data = await response.json();
            console.log("API Response Data:", data);  // Check what's being returned
            setUser(data.user);
            console.log("User", user)
            setFriends(data.friends);
          } else {
            console.error('Failed to fetch data');
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle errors here, like showing a message to the user
        }
      }
    };

    fetchData();
  }, [username]); // Re-fetch when userId changes

  // Handler for the button click
  const handleCreateFriendClick = () => {
    navigate('/create-friend'); // Navigate to the create-friend route
  };

  // If user data has not been loaded, you can render a loading state or return null
  if (!user) {
    return <div>Loading...</div>; // Or any other loading state indicator
  }

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-overlay"></div>
//       <div className="dashboard-content">
//         <div className="user-profile">
//           {/* Make sure you have a valid image path or conditionally render the img tag */}
//           {/* <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" /> */}
//           <h2>{user.mbti}</h2>
//         </div>
//         <div className="virtual-friends-section">
//           <h3>Your Virtual Friends</h3>
//           <div className="friends-list">
//             {friends.map((friend, index) => (
//               <div key={index} className="friend"> 
//                 {/* Make sure you have a valid image path or conditionally render the img tag */}
//                 {/* <img src={friend.avatar} alt={`${friend.name}'s avatar`} className="friend-avatar" /> */}
//                 <h4>{friend.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button className="create-friend-button" onClick={handleCreateFriendClick}>
//           Create New Virtual Friend
//         </button>
//       </div>
//     </div>
//   );
// }

  return (
    <div className="dashboard-container">
      <div className="dashboard-overlay"></div>
      <div className="dashboard-content">
        <section className="user-profile">
          {user.avatar && (
            <img src={`/avatar/${user.avatar}`} alt={`Avatar of ${user.name}`} className="user-avatar" />
          )}
          <div>
           <h2 style={{ textAlign: 'left', display: 'block' }}>User name: {user.username}</h2>
           <h2 style={{ textAlign: 'left', display: 'block' }}>({user.mbti})</h2>
          </div>
        </section>

        <section className="virtual-friends-section">
          <h3>Your Virtual Friends</h3>
          <div className="friends-list">
            {friends.map((friend, index) => (
              <div key={index} className="friend"> 
                {friend.avatar && (
                  <img src={`/avatar/${friend.avatar}`} alt={`Avatar of ${friend.name}`} className="friend-avatar" />
                )}
                <h4>{friend.name}</h4>
                <h4>MBTI: {friend.mbti}</h4>
              </div>
            ))}
          </div>
        </section>

        <button className="create-friend-button" onClick={handleCreateFriendClick}>
          Create New Virtual Friend
        </button>
      </div>
    </div>
  );
}

// return (
//   <div className="dashboard-container">
//     <div className="dashboard-overlay"></div>
//     <div className="dashboard-content">
//       <section className="user-profile">
//         {/* Conditional rendering of user avatar */}
//         {user.avatar && (
//           <img src={`/avatar/${user.avatar}`} alt={`Avatar of ${user.name}`} className="user-avatar" />
//         )}
//         <h2 style={{ textAlign: 'left', display: 'block' }}>User name: {user.username}</h2>
//         <h2 style={{ textAlign: 'left', display: 'block' }}>({user.mbti})</h2>

//       </section>
//       <section className="virtual-friends-section">
//         <h3>Your Virtual Friends</h3>
//         <div className="friends-list">
//           {friends.map((friend, index) => (
//             <div key={index} className="friend"> 
//               {/* Conditional rendering of friend avatar */}
//               {friend.avatar && (
//                 <img src={`/avatar/${friend.avatar}`} alt={`Avatar of ${friend.name}`} className="friend-avatar" />
//               )}
//               <h4>{friend.name}</h4>
//               <h4>{friend.mbti}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       <button className="create-friend-button" onClick={handleCreateFriendClick}>
//         Create New Virtual Friend
//       </button>
//     </div>
//   </div>
// );
// }

export default Dashboard;
