import type { BuildingAccessibilityData } from "@/types/accessibility";

export const walc: BuildingAccessibilityData = {
  sectionId: "walcCard",
  title: "Wilmeth Active Learning Center (WALC)",
  description: [
    "WALC is a very popular study space on campus. The building features various classrooms, a library, and a small cafe."
  ],
  center: {
    lat: 40.42744270543608,
    lng: -86.91318215898515,
  },
  mapZoom: {
    largeScreen: 19,
    smallScreen: 18,
  },
  badges: ["ada-button", "step-free", "elevator"],
  entrances: [
    {
      id: "walc-north-west",
      name: "North-West Front Entrance",
      position: { lat: 40.427540710421106, lng: -86.9135469394018 },
      side: "North-West Corner",
      primaryTag: "ada-button",
      tags: ["ADA Button", "Automatic Door", "Wide Doors"],
      isAccessible: true,
      isMainEntrance: true,
      entranceVisibility: "high",
      requiresDetour: false,
      notes:
        "This main entrance is accessible via a level approach and features wide doors with ADA buttons.",
    },
    {
      id: "walc-north-east",
      name: "North-East Back Entrance",
      position: { lat: 40.42755296103421, lng: -86.91288175158319 },
      side: "North-East Corner",
      primaryTag: "ada-button",
      tags: ["ADA Button", "Automatic Door", "Wide Doors"],
      isAccessible: true,
      isMainEntrance: false,
      entranceVisibility: "high",
      requiresDetour: false,
      notes:
        "This entrance is accessible via a level approach and features wide doors with ADA buttons.",
    },
    {
      id: "walc-south-east",
      name: "South-East Back Entrance",
      position: { lat: 40.42725486214889, lng: -86.91289248041899 },
      side: "South-East Corner",
      primaryTag: "ada-button",
      tags: ["ADA Button", "Automatic Door", "Wide Doors"],
      isAccessible: true,
      isMainEntrance: false,
      entranceVisibility: "high",
      requiresDetour: false,
      notes:
        "This entrance is accessible via a level approach and features wide doors with ADA buttons.",
    },
    {
      id: "walc-cafe",
      name: "Cafe Entrance",
      position: { lat: 40.42713235537463, lng: -86.91287102274741 },
      side: "South-East Corner",
      primaryTag: "ada-button",
      tags: ["ADA Button", "Automatic Door"],
      isAccessible: true,
      isMainEntrance: false,
      entranceVisibility: "high",
      requiresDetour: false,
      notes:
        "This entrance leads into the cafe seating area, which can have high foot traffic. Navigating the space may be challenging during peak hours.",
    },
    {
      id: "walc-south-west",
      name: "South-West Back Entrance",
      position: { lat: 40.427242611481525, lng: -86.91353621056602 },
      side: "South-West Corner",
      primaryTag: "ada-button",
      tags: ["ADA Button", "Automatic Door", "Wide Doors"],
      isAccessible: true,
      isMainEntrance: true,
      entranceVisibility: "high",
      requiresDetour: false,
      notes:
        "This main entrance is accessible via a level approach and features wide doors with ADA buttons.",
    },
  ],
};
