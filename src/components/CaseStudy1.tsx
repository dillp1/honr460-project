import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
} from "@vis.gl/react-google-maps";
import {
  Accessibility,
  ArrowUpRight,
  DoorOpen,
  House,
  TriangleAlert,
} from "lucide-react";

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const harrisonHallCenter = {
  lat: 40.42506433581513,
  lng: -86.92679599596782,
};

type Entrance = {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  side: string;
  primaryTag: "ada-button" | "ramp" | "stairs" | "standard";
  tags: string[];
  notes: string;
};

const entrances: Entrance[] = [
  {
    id: "harrison-north-west",
    name: "North-West Front Entrance",
    position: { lat: 40.42526485980263, lng: -86.92689358462779 },
    side: "North-West Corner",
    primaryTag: "ada-button",
    tags: ["Ramp", "Automatic Door", "Swipe access"],
    notes:
      "Usable approach with a downward ramp and ADA button. Entrance is tucked away between three walls of the building.",
  },
  {
    id: "harrison-north-east",
    name: "North-East Back Entrance",
    position: { lat: 40.42526383888356, lng: -86.92651136984388 },
    side: "North-East Corner",
    primaryTag: "stairs",
    tags: ["Stairs", "Swipe access"],
    notes:
      "Will need to go around the north side of the building to find an accessible entrance.",
  },
  {
    id: "harrison-south-east",
    name: "South-East Front Entrance",
    position: { lat: 40.4248085074342, lng: -86.92651136984519 },
    side: "South-East Corner",
    primaryTag: "stairs",
    tags: ["Stairs", "Swipe access"],
    notes:
      "Will need to go around the north side of the building to find an accessible entrance.",
  },
  {
    id: "harrison-back-dock",
    name: "Back Dock Entrance",
    position: { lat: 40.42504229907804, lng: -86.92705988158579 },
    side: "Loading Dock",
    primaryTag: "stairs",
    tags: ["Stairs", "Swipe access"],
    notes:
      "Stairs are needed to access the back dock from the outside of the building.",
  },
];

const tagStyles: Record<
  Entrance["primaryTag"],
  { label: string; bg: string; text: string; border: string }
> = {
  "ada-button": {
    label: "ADA button",
    bg: "#123d35",
    text: "#effaf7",
    border: "#d0efe6",
  },
  ramp: {
    label: "Ramp",
    bg: "#17406d",
    text: "#eef6ff",
    border: "#d6e8ff",
  },
  stairs: {
    label: "Stairs",
    bg: "#7a2e1d",
    text: "#fff3ef",
    border: "#ffd9cf",
  },
  standard: {
    label: "Standard",
    bg: "#4a5565",
    text: "#f7f8fb",
    border: "#e5e9f0",
  },
};

const usedPrimaryTags = Array.from(
  new Set(entrances.map((entrance) => entrance.primaryTag)),
);

function EntranceMarker({ type }: { type: Entrance["primaryTag"] }) {
  const style = tagStyles[type];
  const Icon =
    type === "ada-button"
      ? Accessibility
      : type === "ramp"
        ? ArrowUpRight
        : type === "stairs"
          ? TriangleAlert
          : DoorOpen;

  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-lg"
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderColor: style.border,
      }}
      aria-hidden="true"
    >
      <Icon className="size-5" strokeWidth={2.25} />
    </div>
  );
}

function CaseStudy1() {
  const [openEntranceId, setOpenEntranceId] = React.useState<string | null>(
    null,
  );

  return (
    <section
      id="caseStudy1"
      aria-label="Harrison Hall accessibility map"
      className="flex w-full flex-col px-6 md:px-[75px] lg:px-[150px] scroll-mt-[90px]"
    >
      <div className="rounded-2xl bg-[#e9eef5] p-6 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#11182c]/8 text-[#11182c]">
            <House className="size-6" />
          </div>
          <p className="text-[40px] leading-none font-semibold">
            Harrison Hall
          </p>
        </div>

        <div className="mb-6 max-w-3xl space-y-4">
          <p className="text-[18px]">
            Harrison hall is a mostly-freshman residence hall with two wings and
            8 floors per wing, each with an elevator. It has only one accessible
            entrance hidden behind the building :(
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)]">
          <div className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-[#11182c]/10 bg-white">
            <div className="min-h-[420px] flex-1">
              <APIProvider apiKey={mapsApiKey}>
                <Map
                  defaultCenter={harrisonHallCenter}
                  defaultZoom={19}
                  gestureHandling="greedy"
                  disableDefaultUI
                  mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                >
                  {entrances.map((entrance) => (
                    <React.Fragment key={entrance.id}>
                      {openEntranceId === null && (
                        <AdvancedMarker
                          position={entrance.position}
                          onClick={() =>
                            setOpenEntranceId((current) =>
                              current === entrance.id ? null : entrance.id,
                            )
                          }
                        >
                          <EntranceMarker type={entrance.primaryTag} />
                        </AdvancedMarker>
                      )}
                      {openEntranceId === entrance.id && (
                        <InfoWindow
                          position={entrance.position}
                          onCloseClick={() => setOpenEntranceId(null)}
                        >
                          <div className="min-w-52 space-y-2">
                            <p className="font-semibold">{entrance.name}</p>
                            <p className="text-sm text-[#11182c]/70">
                              {entrance.side}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {entrance.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-[#11182c]/8 px-2.5 py-1 text-xs font-medium text-[#11182c]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm">{entrance.notes}</p>
                          </div>
                        </InfoWindow>
                      )}
                    </React.Fragment>
                  ))}
                </Map>
              </APIProvider>
            </div>
            <div className="border-t border-[#11182c]/10 px-4 py-3">
              <div className="flex w-fit flex-wrap gap-1.5">
                {usedPrimaryTags.map((type) => {
                  const style = tagStyles[type];

                  return (
                    <div
                      key={type}
                      className="inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs"
                      style={{
                        backgroundColor: `${style.bg}12`,
                        borderColor: style.border,
                      }}
                    >
                      <EntranceMarker type={type} />
                      <span>{style.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#11182c]/10 bg-white p-4 md:p-5">
            <p className="mb-4 text-lg font-semibold">Entrances</p>
            <div className="space-y-3">
              {entrances.map((entrance) => {
                const style = tagStyles[entrance.primaryTag];

                return (
                  <button
                    key={entrance.id}
                    type="button"
                    onClick={() => setOpenEntranceId(entrance.id)}
                    className="w-full rounded-2xl border border-[#11182c]/10 p-4 text-left transition-colors hover:bg-[#f6f8fb]"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{entrance.name}</p>
                        <p className="text-sm text-[#11182c]/65">
                          {entrance.side}
                        </p>
                      </div>
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: style.bg,
                          color: style.text,
                        }}
                      >
                        {style.label}
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {entrance.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#11182c]/8 px-2.5 py-1 text-xs font-medium text-[#11182c]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-[#11182c]/80">
                      {entrance.notes}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy1;
