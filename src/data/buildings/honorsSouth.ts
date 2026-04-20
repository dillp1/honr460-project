import type { BuildingAccessibilityData } from "@/types/accessibility";

export const honorsSouth: BuildingAccessibilityData = {
  sectionId: "honorsSouthCard",
  title: "Honors College & Residences South",
  description: [
    "Honors College & Residences South (HCRS) holds classrooms, office and study lounges, along with residential rooms. The building has two elevators, but are only accessible by residents with swipe access. This restricts access to resident-only areas, like the laundry room.",
  ],
  center: {
    lat: 40.42577410376591,
    lng: -86.91944292205326,
  },
  mapZoom: {
    largeScreen: 19,
    smallScreen: 18,
  },
  badges: ["step-free", "elevator", "ada-button"],
  entrances: [
    {
      id: "hrcs-north",
      name: "North Entrance",
      position: { lat: 40.42615559120495, lng: -86.9194801440696 },
      side: "North side",
      primaryTag: "ada-button",
      tags: ["Automatic Door", "Wide Doors"],
      notes:
        "Set of double doors with an ADA button on the right side. This entrance is typically used when going from Honors College and Residences North to South.",
    },
    {
      id: "hrcs-east",
      name: "East Entrance",
      position: { lat: 40.42584044145668, lng: -86.91937004255936 },
      side: "East side",
      primaryTag: "ada-button",
      tags: ["Automatic Door", "Wide Doors"],
      notes:
        "A set of double doors with an ADA button on the right side. This entrance is closest to North Russell Street parking.",
    },
    {
      id: "hrcs-south",
      name: "South Entrance",
      position: { lat: 40.425391239413756, lng: -86.91937540697727 },
      side: "South side",
      primaryTag: "ada-button",
      tags: ["Automatic Door", "Double Doors"],
      notes:
        "A set of double doors with an ADA button on the right side. This entrance will take you directly to many Honors Professor's offices.",
    },
    {
      id: "hrcs-west",
      name: "West Entrance",
      position: { lat: 40.425832274173565, lng: -86.91957389043932 },
      side: "West side",
      primaryTag: "ada-button",
      tags: ["Automatic Door", "Wide Doors"],
      notes:
        "A set of double doors with an ADA button on the right side. This entrance leads to the same area as the East entrance.",
    },
  ],
};
