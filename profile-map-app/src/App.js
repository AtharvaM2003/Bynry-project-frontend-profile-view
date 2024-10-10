import React, { useState } from 'react';
import ProfileList from './ProfileList';
import ProfileForm from './ProfileForm';
import './App.css';

const App = () => {
  // State for storing profiles
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', role: 'Software Engineer', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager', image: 'https://via.placeholder.com/100' }
  ]);

  // State to handle editing profiles
  const [editingProfile, setEditingProfile] = useState(null);

  // Function to add a new profile
  const addProfile = (newProfile) => {
    setProfiles([...profiles, { id: profiles.length + 1, ...newProfile }]);
  };

  // Function to update an existing profile
  const updateProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditingProfile(null); // Exit edit mode after update
  };

  // Function to edit an existing profile (fills the form with the profile data)
  const editProfile = (profile) => {
    setEditingProfile(profile);
  };

  return (
    <div className="container">
      <h1>Profiles</h1>

      {/* Profile Form for adding or editing profiles */}
      <ProfileForm
        addProfile={addProfile}
        updateProfile={updateProfile}
        editingProfile={editingProfile}
      />

      {/* List of profiles */}
      <ProfileList profiles={profiles} editProfile={editProfile} />
    </div>
  );
};

export default App;
