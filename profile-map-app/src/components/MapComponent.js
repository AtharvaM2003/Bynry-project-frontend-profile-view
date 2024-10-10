// src/components/MapComponent.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Function to convert address to coordinates (using a static lat/lng for simplicity)
const getCoordinates = (address) => {
  // Normally, you'd use a Geocoding API like Google Maps API or OpenCage Geocoder
  const geoData = {
    "123 Main St, Springfield, USA": { lat: 39.7817, lng: -89.6501 },
    "456 Elm St, Springfield, USA": { lat: 39.8017, lng: -89.6501 },
  };
  return geoData[address] || { lat: 0, lng: 0 };
};

const MapComponent = ({ address }) => {
  const { lat, lng } = getCoordinates(address);

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
