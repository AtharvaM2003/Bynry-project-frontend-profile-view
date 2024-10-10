import React, { useState } from 'react';

const AdminPage = ({ addProfile }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile({ name, role, location, imageUrl });
  };

  return (
    <div className="container">
      <h1>Admin Section</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPage;
