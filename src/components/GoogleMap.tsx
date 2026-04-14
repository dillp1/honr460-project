"use client";

import React from "react";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  type MapCameraChangedEvent,
  type MapCameraProps,
  Pin,
} from "@vis.gl/react-google-maps";
import { Button } from "./ui/button";

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapCenter = { lat: 40.427254133186906, lng: -86.91946482079187 };

/* TODO Add all the case studies */
function GoogleMap() {
  const [cameraProps, setCameraProps] = React.useState<MapCameraProps>({
    center: mapCenter,
    zoom: 15,
  });
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
    {
      id: "windsor-dining-court",
      position: { lat: 40.427223048086745, lng: -86.92106110284078 },
      title: "Windsor Dining Court",
      subtitle: "Purdue University",
      targetId: "CaseStudy3",
      buttonLabel: "Learn More",
    },
  ];
  const [openMarkerId, setOpenMarkerId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const updateZoom = () => {
      setCameraProps((current) => ({
        ...current,
        center: mapCenter,
        zoom: window.innerWidth >= 1024 ? 16 : 15,
      }));
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);

    return () => window.removeEventListener("resize", updateZoom);
  }, []);

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
            {...cameraProps}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
            onCameraChanged={(event: MapCameraChangedEvent) =>
              setCameraProps(event.detail)
            }
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
