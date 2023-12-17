    'use client'
    import React from 'react';
    import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

    const MapContainer = () => {
    const mapStyles = {
        height: '80vh',
        width: '90%',
    };

    const defaultCenter = {
        lat: -37.97896194458008,
        lng: -57.584495544433594, 
    };

    const locations = [
        { lat: -37.88220165423163, lng: -57.868810008932755, name: 'Rincon Grande', image: {url: '/map-icons/RinconGrande60.png'}},
        { lat: -37.7369515298438, lng: -57.421912012905146, name: 'Laguna Mar Chiquita', image: {url: '/map-icons/LagunaMC60.png'}},
        { lat: -37.920700168424304, lng: -57.557902429910456, name: 'Villa San francisco', image: {url: '/map-icons/VillaSF60.png'}}
    ];

    return (
        <LoadScript googleMapsApiKey="AIzaSyAqhhorbfTG2Skc0SwYGP5g_C0QPdnvfG0">
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
        >
            {locations.map((item, index) => (
            <Marker key={index} position={item} title={item.name} icon={item.image}/>
            ))}
        </GoogleMap>
        </LoadScript>
    );
    };

    export default MapContainer;