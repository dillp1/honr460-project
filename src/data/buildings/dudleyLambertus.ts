import type { BuildingAccessibilityData } from "@/types/accessibility";

export const dudleyLambertus: BuildingAccessibilityData = {
  sectionId: "dudleyLambertusCard",
  title: "Dudley Lambertus",
  description: [
    "Dudley Lambertus hall is a two-wing building that holds many engineering-related departments, such as the Polytechnic Institute and Civil Engineering. The building has two elevators inside, which is shared at the intersections of the two wings.",
  ],
  center: {
    lat: 40.42736909925624,
    lng: -86.91141109859164,
  },
  mapZoom: 19,
  entrances: [
    {
      id: "wing-main",
      name: "South Main Entrance",
      position: { lat: 40.42714349971407, lng: -86.91184749960853 },
      side: "South-West corner",
      primaryTag: "ada-button",
      tags: ["Level Access", "Automatic Door", "Wide Doors"],
      notes:
        "The main entrance is accessible via a level approach and features an automatic and wide doors.",
    },
    {
      id: "lambertus-main",
      name: "Lambertus North Entrance",
      position: { lat: 40.42790954343337, lng: -86.91164558272011 },
      side: "North side",
      primaryTag: "ada-button",
      tags: ["Stairs", "Ramp", "Automatic Door", "Wide Doors"],
      notes:
        "Stairs and ramps are in close proximity to this entrance. This entrance doubles as an outdoor seating area, with ledges to sit on.",
    },
    {
      id: "dudley-main",
      name: "Dudley East Entrance",
      position: { lat: 40.427056730457885, lng: -86.91081837482244 },
      side: "East side",
      primaryTag: "ada-button",
      tags: ["Stairs", "Ramp", "Automatic Door", "Wide Doors"],
      notes:
        "Stairs and ramps are in close proximity to this entrance.",
    },
    {
      id: "dudley-side",
      name: "Dudley South Entrance",
      position: { lat: 40.42702698097286, lng: -86.91128408635538 },
      side: "South side",
      primaryTag: "ada-button",
      tags: ["Level Access", "Wide Doors"],
      notes:
        "This side entrance is accessible via a level approach and features wide doors. There are outdoor tables and chairs to the right and left of the entrance.",
    },
  ],
};
