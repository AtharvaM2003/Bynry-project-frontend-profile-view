import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ProfileDetails.css';
import L from 'leaflet';

// Create a custom marker icon
const customIcon = new L.Icon({
  iconUrl: require('./pin-icon.png'),
  iconSize: [38, 38], // Size of the icon
  iconAnchor: [19, 38], // Position the icon to point to the location
});

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="profile-details">
      <img src={profile.imageUrl} alt={profile.name} className="circular-profile-image" />
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
      <p>{profile.location}</p>

      {/* Leaflet map with marker */}
      <div className="map-container">
        <MapContainer
          center={[profile.latitude, profile.longitude]}
          zoom={13}
          style={{ height: '300px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker
            position={[profile.latitude, profile.longitude]}
            icon={customIcon} // Adding the custom marker icon
          >
            <Popup>{profile.name}'s location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ProfileDetails;
