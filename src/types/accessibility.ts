export type PrimaryTag = "ada-button" | "ramp" | "stairs" | "standard";
export type BuildingBadge =
  | "step-free"
  | "ada-button"
  | "ramp-access"
  | "elevator"
  | "limited-access";

export type EntranceVisibility = "high" | "moderate" | "low";

export type Entrance = {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  side: string;
  primaryTag: PrimaryTag;
  tags: string[];
  notes: string;
  isAccessible?: boolean;
  isMainEntrance?: boolean;
  entranceVisibility?: EntranceVisibility;
  requiresDetour?: boolean;
};

export type BuildingAccessibilityData = {
  sectionId: string;
  title: string;
  description: string[];
  center: { lat: number; lng: number };
  mapZoom?: {
    largeScreen?: number;
    smallScreen?: number;
  };
  badges?: BuildingBadge[];
  entrances: Entrance[];
};
