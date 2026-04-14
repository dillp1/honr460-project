"use client";

import React from "react";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { Button } from "./ui/button";

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

/* TODO Add all the case studies */
function GoogleMap() {
  const markers = [
    {
      id: "honors-north",
      position: { lat: 40.427172008800056, lng: -86.91941359425552 },
      title: "Honors North",
      subtitle: "Purdue University",
      targetId: "caseStudy1",
      buttonLabel: "Go to Case Study 1",
    },
    {
      id: "harrison-hall",
      position: { lat: 40.424996711079196, lng: -86.92656771052967 },
      title: "Harrison Hall",
      subtitle: "Purdue University",
      targetId: "caseStudy2",
      buttonLabel: "Go to Case Study 2",
    },
    {
      id: "physics-building",
      position: { lat: 40.430271072885674, lng: -86.91304065181082 },
      title: "Physics Building",
      subtitle: "Purdue University",
      targetId: "CaseStudy3",
      buttonLabel: "Go to Case Study 3",
    },
  ];
  const [openMarkerId, setOpenMarkerId] = React.useState<string | null>(null);

  const handleJumpToSection = (targetId: string) => {
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenMarkerId(null);
  };

  return (
    <APIProvider apiKey={mapsApiKey}>
      <div
        className="w-full"
        style={{ height: "calc(100vh - 5rem - 2rem)", maxWidth: "90vw" }}
      >
        <Map
          zoom={15}
          center={markers[0].position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        />
        {markers.map((marker) => (
          <React.Fragment key={marker.id}>
            <AdvancedMarker
              position={marker.position}
              onClick={() =>
                setOpenMarkerId((current) =>
                  current === marker.id ? null : marker.id,
                )
              }
            >
              <Pin />
            </AdvancedMarker>
            {openMarkerId === marker.id && (
              <InfoWindow
                position={marker.position}
                onCloseClick={() => setOpenMarkerId(null)}
              >
                <div className="flex min-w-44 flex-col items-center gap-2 text-center">
                  <h1 className="font-bold">{marker.title}</h1>
                  <p>{marker.subtitle}</p>
                  <Button
                    variant="outline"
                    className="mx-auto"
                    onClick={() => handleJumpToSection(marker.targetId)}
                  >
                    {marker.buttonLabel}
                  </Button>
                </div>
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
