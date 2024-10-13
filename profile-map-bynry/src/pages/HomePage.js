import React from 'react';
import { Link } from 'react-router-dom';
import ProfileList from '../components/ProfileList';
import './HomePage.css'; 

const HomePage = ({ profiles }) => {
  return (
    <div className="homepage-container">
      {}
      <div className="top-right">
        <Link to="/admin">
          <button className="admin-btn">Go to Admin Page</button>
        </Link>
      </div>

      {}
      <h1>Profiles</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default HomePage;
