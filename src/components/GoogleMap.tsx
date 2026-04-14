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
      id: "harrison-hall",
      position: { lat: 40.424996711079196, lng: -86.92656771052967 },
      title: "Harrison Hall",
      subtitle: "Purdue University",
      targetId: "caseStudy1",
      buttonLabel: "Learn More",
    },
    {
      id: "physics-building",
      position: { lat: 40.430271072885674, lng: -86.91304065181082 },
      title: "Physics Building",
      subtitle: "Purdue University",
      targetId: "CaseStudy2",
      buttonLabel: "Learn More",
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
      <section
        id="map"
        aria-label="Campus map"
        className="w-full scroll-mt-24"
        style={{ maxWidth: "90vw" }}
      >
        <div style={{ height: "calc(100vh - 5rem - 2rem)" }}>
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
      </section>
    </APIProvider>
  );
}

export default GoogleMap;
