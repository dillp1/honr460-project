import type { BuildingAccessibilityData } from "@/types/accessibility";

export const windsorDiningCourt: BuildingAccessibilityData = {
  sectionId: "windsorDiningCourtCard",
  title: "Windsor Dining Court",
  description: [
    "Windsor dining court is a large dining hall in the center of campus, tucked away under Windsor Residence Hall. It features a highly accessible entrance, with it's main entrance having a large ramp leading down into the dining court.",
  ],
  center: {
    lat: 40.42698865220964,
    lng: -86.9209784743681,
  },
  mapZoom: {
    largeScreen: 19,
    smallScreen: 18,
  },
  badges: ["ramp-access", "ada-button", "step-free"],
  entrances: [
    {
      id: "windsor-main",
      name: "Main Dining Entrance",
      position: { lat: 40.4270693687835, lng: -86.92099172862635 },
      side: "South side",
      primaryTag: "ramp",
      tags: ["Main entry", "ADA Button"],
      notes:
        "This is the main entrance to the dining court, featuring a wide ramp that leads down into the dining area.",
    },
    {
      id: "windsor-west-stairs",
      name: "West Stairs Entrance",
      position: { lat: 40.426960905864995, lng: -86.92111322599352 },
      side: "West side",
      primaryTag: "stairs",
      tags: ["Stairs"],
      notes:
        "This entrance shares the same air-lock as the accessible main entrance. Navigating to the main accessible entrance is only a few steps north.",
    },
  ],
};
