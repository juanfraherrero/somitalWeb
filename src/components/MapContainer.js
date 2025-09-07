'use client'
import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const MapContainer = ({ locations }) => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAqhhorbfTG2Skc0SwYGP5g_C0QPdnvfG0",// process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        
    });

    const mapStyles = {
        height: '75vh',
        width: '90%',
    };

    const defaultCenter = {
        lat: -37.97896194458008,
        lng: -57.584495544433594,
    };

    const customMarkerIcon = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: '#c73420',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
        scale: 1.8,
        anchor: { x: 12, y: 24 }
    };

    if (!isLoaded) return <p>Cargando mapa...</p>;

    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
        >
            {locations.map((item, index) => (
                <Marker 
                    key={index} 
                    position={item} 
                    title={item.name}
                    icon={customMarkerIcon}
                    onClick={() => setSelectedMarker(index)}
                />
            ))}
            {selectedMarker !== null && (
                <InfoWindow
                    position={{ 
                        lat: locations[selectedMarker].lat, 
                        lng: locations[selectedMarker].lng 
                    }}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div className="p-2 min-w-[200px]">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">
                            {locations[selectedMarker].name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {locations[selectedMarker].description}
                        </p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default MapContainer;