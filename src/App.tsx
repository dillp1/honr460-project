"use client";
import React from "react";
import "./App.css";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function GoogleMap() {
  const position = { lat: 40.427172008800056, lng: -86.91941359425552 };
  const [open, setOpen] = React.useState(false);

  return (
    <APIProvider apiKey={mapsApiKey}>
      <div style={{ height: "90vh", width: "90vw" }}>
        <Map
          zoom={15}
          center={position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        />
        <AdvancedMarker position={position} onClick={() => setOpen(!open)}>
          <Pin />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
            <div>
              <h1>Honors North</h1>
              <p>Purdue University</p>
            </div>
          </InfoWindow>
        )}
        <AdvancedMarker
          position={{ lat: 40.424996711079196, lng: -86.92656771052967 }}
          onClick={() => setOpen(!open)}
        >
          <Pin />
        </AdvancedMarker>
        {open && (
          <InfoWindow
            position={{ lat: 40.424996711079196, lng: -86.92656771052967 }}
            onCloseClick={() => setOpen(false)}
          >
            <div>
              <h1>Harrison Hall</h1>
              <p>Purdue University</p>
            </div>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <GoogleMap />
      </div>
    </>
  );
}

export default App;
