import type { BuildingAccessibilityData } from "@/types/accessibility";

export const physicsBuilding: BuildingAccessibilityData = {
  sectionId: "CaseStudy2",
  title: "Physics Building",
  description: [
    "This draft card shows how the same entrance-mapping pattern can scale to another academic building.",
    "The entrance points below are placeholders for structure and should be replaced with field-verified door conditions.",
  ],
  center: {
    lat: 40.430271072885674,
    lng: -86.91304065181082,
  },
  entrances: [
    {
      id: "physics-main",
      name: "Main East Entrance",
      position: { lat: 40.430296, lng: -86.912857 },
      side: "East side",
      primaryTag: "standard",
      tags: ["Standard entry", "Heavy door"],
      notes:
        "Use this as a baseline front-door reference while the rest of the building is documented.",
    },
    {
      id: "physics-south-ramp",
      name: "South Ramp Entrance",
      position: { lat: 40.430128, lng: -86.913066 },
      side: "South side",
      primaryTag: "ramp",
      tags: ["Ramp", "Manual door"],
      notes:
        "This draft route assumes a step-free approach but a manual entry door at the top of the ramp.",
    },
    {
      id: "physics-north-service",
      name: "North Service Entrance",
      position: { lat: 40.430421, lng: -86.913086 },
      side: "North side",
      primaryTag: "ada-button",
      tags: ["ADA button", "Automatic Door", "Swipe access"],
      notes:
        "Placeholder example for a staffed or controlled accessible entrance that may be easier to use than the main door.",
    },
  ],
};
