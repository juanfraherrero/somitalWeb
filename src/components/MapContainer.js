    'use client'
    import React from 'react';
    import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';

const MapContainer = ({locations}) => {

    const mapStyles = {
        height: '80vh',
        width: '90%',
    };

    const defaultCenter = {
        lat: -37.97896194458008,
        lng: -57.584495544433594, 
    };
    
    return (
        <LoadScript googleMapsApiKey="REDACTED_GOOGLE_MAPS_API_KEY">
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
        >
            {locations.map((item, index) => (
                <Marker key={index} position={item} title={item.name} icon={item.image} />
            ))}
            {locations.map((item, index) => (
                <InfoWindow
                    key={index}
                    position={{ lat: item.lat, lng: item.lng }}
                >
                    <div>
                        <h3><b>{item.name}</b></h3>
                        <p>{item.description}</p>
                    </div>
                </InfoWindow>
            ))}
        </GoogleMap>
        </LoadScript>
    );
    };

    export default MapContainer;