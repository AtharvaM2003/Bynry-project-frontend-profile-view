import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Atharva Mundhe',
      photo: 'https://cdn.prod.website-files.com/5fd2ba952bcd68835f2c8254/654553fedbede7976b97eaf5_Professional-5.remini-enhanced.webp',
      description: 'Software Engineer',
      location: { lat: 37.7749, lng: -122.4194 },
    },
    {
      id: 2,
      name: 'Amey Shrotri',
      photo: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png',
      description: 'Data Scientist',
      location: { lat: 40.7128, lng: -74.0060 },
    },
  ]);

  const addProfile = (newProfile) => {
    const updatedProfiles = [...profiles, { ...newProfile, id: profiles.length + 1 }];
    setProfiles(updatedProfiles);
  };

  const editProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfile.id ? { ...profile, ...updatedProfile } : profile
    );
    setProfiles(updatedProfiles);
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
          <Route
            path="/admin"
            element={
              <AdminPanel
                profiles={profiles}
                addProfile={addProfile}
                editProfile={editProfile}
                deleteProfile={deleteProfile}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
