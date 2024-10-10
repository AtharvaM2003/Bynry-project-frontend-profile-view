// src/components/AddProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProfile = () => {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
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
    // Handle form submission logic here, like saving to an API or localStorage.
    console.log('Profile added:', profile);
    
    // Redirect to the home page after submission
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Add New Profile</h1>
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

        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;
