import type { BuildingAccessibilityData } from "@/types/accessibility";

export const windsorDiningCourt: BuildingAccessibilityData = {
  sectionId: "CaseStudy3",
  title: "Windsor Dining Court",
  description: [
    "Dining locations need slightly different notes because a technically accessible entrance can still feel awkward if it routes people through a side door or service path.",
    "This draft keeps the same shared UI so those differences live in the entrance notes instead of in a custom layout.",
  ],
  center: {
    lat: 40.427223048086745,
    lng: -86.92106110284078,
  },
  entrances: [
    {
      id: "windsor-main",
      name: "Main South Entrance",
      position: { lat: 40.427068, lng: -86.921011 },
      side: "South side",
      primaryTag: "standard",
      tags: ["Main entry", "Dining access"],
      notes:
        "This marks the default public-facing entrance so users can compare it with the more accessible alternatives.",
    },
    {
      id: "windsor-west-ramp",
      name: "West Ramp Entrance",
      position: { lat: 40.427202, lng: -86.921293 },
      side: "West side",
      primaryTag: "ramp",
      tags: ["Ramp", "Level landing"],
      notes:
        "Draft example of a side approach that is easier for a step-free route but may feel less obvious on first arrival.",
    },
    {
      id: "windsor-north-access",
      name: "North Accessible Entrance",
      position: { lat: 40.427391, lng: -86.921066 },
      side: "North side",
      primaryTag: "ada-button",
      tags: ["ADA button", "Automatic Door", "Swipe access"],
      notes:
        "Placeholder for an accessible entry that combines an opener with card access during limited hours.",
    },
  ],
};
