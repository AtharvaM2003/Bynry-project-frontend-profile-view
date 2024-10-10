import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ setProfiles }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      id: Math.random(),
      name,
      role,
      location,
      imageUrl,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };

    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input type="url" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <input type="number" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
        <input type="number" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
