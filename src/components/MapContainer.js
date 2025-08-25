'use client'
import React from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const MapContainer = ({ locations }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAqhhorbfTG2Skc0SwYGP5g_C0QPdnvfG0"// process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const mapStyles = {
        height: '75vh',
        width: '90%',
    };

    const defaultCenter = {
        lat: -37.97896194458008,
        lng: -57.584495544433594,
    };

    if (!isLoaded) return <p>Cargando mapa...</p>;

    return (
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
    );
};

export default MapContainer;