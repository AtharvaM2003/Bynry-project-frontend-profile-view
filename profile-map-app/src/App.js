import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileList from './components/ProfileList'; 
import ProfileDetails from './components/ProfileDetails'; 
import ProfileForm from './components/ProfileForm'; 
import 'leaflet/dist/leaflet.css';

import './App.css'; 

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Atharva Mundhe',
      role: 'Software Engineer',
      location: 'New York, USA',
      imageUrl: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    {
      id: 2,
      name: 'Vishwa Wagh',
      role: 'Product Manager',
      location: 'San Francisco, USA',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhkL7trVc25qGWNGTm6YKaWF9ZJdOnCkH3Q&s',
      latitude: 19.2181,
      longitude: 74.0204,
    },
    {
      id: 3,
      name: 'Amey Shrotri',
      role: 'UX Designer',
      location: 'Los Angeles, USA',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT916ZIZzh7ZTuRB9cq3yVWptueIy-eKYw&s',
      latitude: 34.0522,
      longitude: -118.2437,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <header className="header">
          <input
            type="text"
            placeholder="Search profiles..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a href="/add-profile" className="admin-btn">Admin Section</a>
        </header>
        <Routes>
          <Route path="/" element={<ProfileList profiles={filteredProfiles} />} />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
          <Route path="/add-profile" element={<ProfileForm setProfiles={setProfiles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
