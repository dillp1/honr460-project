import type { BuildingAccessibilityData } from "@/types/accessibility";

export const harrisonHall: BuildingAccessibilityData = {
  sectionId: "caseStudy1",
  title: "Harrison Hall",
  description: [
    "Harrison hall is a mostly-freshman residence hall with two wings and 8 floors per wing, each with two elevators, as well a service elevator to navigate the main floors and basement. It has only one accessible entrance tucked behind the building.",
  ],
  center: {
    lat: 40.42506433581513,
    lng: -86.92679599596782,
  },
  entrances: [
    {
      id: "harrison-north-west",
      name: "North-West Front Entrance",
      position: { lat: 40.42526485980263, lng: -86.92689358462779 },
      side: "North-West Corner",
      primaryTag: "ada-button",
      tags: ["Ramp", "Automatic Door", "Swipe access"],
      notes:
        "Usable approach with a downward ramp and ADA button. The entrance is tucked away between three walls of the building.",
    },
    {
      id: "harrison-north-east",
      name: "North-East Back Entrance",
      position: { lat: 40.42526383888356, lng: -86.92651136984388 },
      side: "North-East Corner",
      primaryTag: "stairs",
      tags: ["Stairs", "Swipe access"],
      notes:
        "This route requires stairs, so users need to continue around the north side to reach the accessible entrance.",
    },
    {
      id: "harrison-south-east",
      name: "South-East Front Entrance",
      position: { lat: 40.4248085074342, lng: -86.92651136984519 },
      side: "South-East Corner",
      primaryTag: "stairs",
      tags: ["Stairs", "Swipe access"],
      notes:
        "The entrance is visible from the front approach, but it is stair-first and not suitable for a step-free route.",
    },
    {
      id: "harrison-back-dock",
      name: "Back Dock Entrance",
      position: { lat: 40.42504229907804, lng: -86.92705988158579 },
      side: "Loading Dock",
      primaryTag: "stairs",
      tags: ["Stairs", "Swipe access"],
      notes:
        "The loading dock entrance helps with orientation, but it still requires stairs from the outdoor approach.",
    },
  ],
};
