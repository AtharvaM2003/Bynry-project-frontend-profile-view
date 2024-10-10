// src/components/ProfileList.js
import React from 'react';
import { Link } from 'react-router-dom';

const profiles = [
  { id: 1, name: 'John Doe', photo: 'https://via.placeholder.com/100', description: 'Software Engineer', address: '123 Main St, Springfield, USA' },
  { id: 2, name: 'Jane Smith', photo: 'https://via.placeholder.com/100', description: 'Product Manager', address: '456 Elm St, Springfield, USA' },
];

const ProfileList = () => {
  return (
    <div className="container">
      <h1>Profiles</h1>
      <Link to="/add-profile">
        <button className="add-profile-button">Add New Profile</button>
      </Link>
      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <Link to={`/profile/${profile.id}`}>View Details</Link>
            <Link to={`/update-profile/${profile.id}`}>
              <button className="summary-button">Edit Profile</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
