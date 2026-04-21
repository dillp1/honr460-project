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
import { MapPin } from "lucide-react";
import { harrisonHall } from "@/data/buildings/harrisonHall";
import { windsorDiningCourt } from "@/data/buildings/windsorDiningCourt";
import { dudleyLambertus } from "@/data/buildings/dudleyLambertus";
import { honorsSouth } from "@/data/buildings/honorsSouth";
import { walc } from "@/data/buildings/walc";
import { Button } from "./ui/button";
import AccessibilityBadge from "./AccessibilityBadge";
import { customMapStyles } from "@/lib/mapStyles";
import { getAccessibilityScores } from "@/lib/accessibilityScores";

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapCenter = { lat: 40.427254133186906, lng: -86.91946482079187 };

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
      targetId: "harrisonHallCard",
      buttonLabel: "View Guide",
      building: harrisonHall,
    },
    {
      id: "windsor-dining-court",
      position: { lat: 40.427223048086745, lng: -86.92106110284078 },
      title: "Windsor Dining Court",
      subtitle: "Purdue University",
      targetId: "windsorDiningCourtCard",
      buttonLabel: "View Guide",
      building: windsorDiningCourt,
    },
    {
      id: "dudley-lambertus",
      position: { lat: 40.42736909925624, lng: -86.91141109859164 },
      title: "Dudley Lambertus",
      subtitle: "Purdue University",
      targetId: "dudleyLambertusCard",
      buttonLabel: "View Guide",
      building: dudleyLambertus,
    },
    {
      id: "honors-south",
      position: { lat: 40.425391239413756, lng: -86.91937540697727 },
      title: "Honors College & Residences South",
      subtitle: "Purdue University",
      targetId: "honorsSouthCard",
      buttonLabel: "View Guide",
      building: honorsSouth,
    },
    {
      id: "walc",
      position: { lat: 40.42744270543608, lng: -86.91318215898515 },
      title: "Walc",
      subtitle: "Purdue University",
      targetId: "walcCard",
      buttonLabel: "View Guide",
      building: walc,
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
        <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[#11182c]/70">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          <span>Tap or click a marker to view building details.</span>
        </p>
        <div style={{ height: "calc(100vh - 5rem - 2rem)" }}>
          <Map
            {...cameraProps}
            clickableIcons={false}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
            renderingType="RASTER"
            styles={customMapStyles}
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
              {openMarkerId === marker.id &&
                (() => {
                  const {
                    totalEntrances,
                    accessibleCount,
                    availabilityPercent,
                    experience,
                  } = getAccessibilityScores(marker.building);
                  const experienceTone =
                    experience === "Equal access"
                      ? {
                          bg: "#123d35",
                          text: "#effaf7",
                          border: "#d0efe6",
                        }
                      : experience === "Accessible, but inconvenient"
                        ? {
                            bg: "#17406d",
                            text: "#eef6ff",
                            border: "#d6e8ff",
                          }
                        : experience === "Technically accessible"
                          ? {
                              bg: "#7a2e1d",
                              text: "#fff3ef",
                              border: "#ffd9cf",
                            }
                          : {
                              bg: "#4a5565",
                              text: "#f7f8fb",
                              border: "#e5e9f0",
                            };

                  return (
                    <InfoWindow
                      position={marker.position}
                      onCloseClick={() => setOpenMarkerId(null)}
                    >
                      <div className="flex min-w-64 max-w-80 flex-col gap-3 text-left">
                        <div className="space-y-1">
                          <h1 className="font-bold">{marker.title}</h1>
                          <p className="text-sm text-[#11182c]/70">
                            {marker.subtitle}
                          </p>
                        </div>
                        {marker.building.badges?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {marker.building.badges.slice(0, 3).map((badge) => (
                              <AccessibilityBadge
                                key={badge}
                                badge={badge}
                                size="sm"
                              />
                            ))}
                          </div>
                        ) : null}
                        <div className="rounded-2xl border border-[#11182c]/10 bg-[#f6f8fb] p-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#11182c]/55">
                            Accessibility Score
                          </p>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            <div className="rounded-2xl border border-[#d6e8ff] bg-[#eef6ff] p-2.5">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17406d]/75">
                                Availability
                              </p>
                              <p className="mt-1 text-xl leading-none font-semibold text-[#17406d]">
                                {availabilityPercent}%
                              </p>
                              <p className="mt-1 text-[11px] text-[#17406d]/75">
                                {accessibleCount} of {totalEntrances} entrances
                              </p>
                            </div>
                            <div
                              className="rounded-2xl border p-2.5"
                              style={{
                                backgroundColor: `${experienceTone.bg}10`,
                                borderColor: experienceTone.border,
                              }}
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#11182c]/55">
                                Experience
                              </p>
                              <p
                                className="mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold"
                                style={{
                                  backgroundColor: experienceTone.bg,
                                  color: experienceTone.text,
                                }}
                              >
                                {experience}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[#11182c]/80">
                          {marker.building.entrances.length > 0
                            ? `${marker.building.entrances.length} mapped entrance${
                                marker.building.entrances.length === 1
                                  ? ""
                                  : "s"
                              }`
                            : "Accessibility details are still being documented."}
                        </p>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleJumpToSection(marker.targetId)}
                        >
                          {marker.buttonLabel}
                        </Button>
                      </div>
                    </InfoWindow>
                  );
                })()}
            </React.Fragment>
          ))}
        </div>
      </section>
    </APIProvider>
  );
}

export default GoogleMap;
