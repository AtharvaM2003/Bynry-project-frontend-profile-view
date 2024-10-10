import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileList.css';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.imageUrl} alt={profile.name} className="profile-image" />
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <Link to={`/profile/${profile.id}`}>
            <button className="view-details-btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
