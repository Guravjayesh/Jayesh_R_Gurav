import React from 'react';

// dummy file else delete 
const ProfileLinks = () => {
  return (
    <div>
      <a href="https://github.com/your-github-profile">GitHub</a>
      <a href="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</a>
      <a href="https://www.instagram.com/your-instagram-profile">Instagram</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <ProfileLinks />
    </div>
  );
};

export default App;
