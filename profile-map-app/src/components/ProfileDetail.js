// src/components/ProfileDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';

// Sample profiles (replace with API data)
const profiles = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/100",
    description: "Software Engineer",
    address: "123 Main St, Springfield, USA",
    contact: "john.doe@example.com",
    interests: "Coding, Reading, Hiking"
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/100",
    description: "Product Manager",
    address: "456 Elm St, Springfield, USA",
    contact: "jane.smith@example.com",
    interests: "Traveling, Cooking, Yoga"
  },
];

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>

      <MapComponent address={profile.address} />
    </div>
  );
}

export default ProfileDetail;
