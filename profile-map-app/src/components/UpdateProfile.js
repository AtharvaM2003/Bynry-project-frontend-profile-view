// src/components/UpdateProfile.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulating fetching a profile from a local data source (like an API or localStorage)
  const profiles = [
    { id: 1, name: 'John Doe', photo: 'https://via.placeholder.com/100', description: 'Software Engineer', address: '123 Main St, Springfield, USA' },
    { id: 2, name: 'Jane Smith', photo: 'https://via.placeholder.com/100', description: 'Product Manager', address: '456 Elm St, Springfield, USA' },
  ];

  const profileToEdit = profiles.find((profile) => profile.id === parseInt(id));

  const [profile, setProfile] = useState(profileToEdit || {
    name: '',
    photo: '',
    description: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here (e.g., save to an API or localStorage)
    console.log('Profile updated:', profile);
    
    // After updating, navigate back to the profile list
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />

        <label>Photo URL:</label>
        <input
          type="text"
          name="photo"
          value={profile.photo}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={profile.description}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
