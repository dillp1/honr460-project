import type {
  BuildingAccessibilityData,
  Entrance,
  EntranceVisibility,
} from "@/types/accessibility";

export type AccessExperienceScore =
  | "Equal access"
  | "Accessible, but inconvenient"
  | "Technically accessible"
  | "Not accessible";

const REFLECTIVE_PROMPTS = [
  "If the accessible entrance is not the main entrance, is this equal access?",
  "Does this building offer inclusion, or just accommodation?",
  "Would this entrance feel dignified and easy to use every day?",
] as const;

function isAccessibleEntrance(entrance: Entrance) {
  return entrance.isAccessible ?? entrance.primaryTag !== "stairs";
}

function visibilityWeight(visibility?: EntranceVisibility) {
  if (visibility === "high") return 2;
  if (visibility === "moderate") return 1;
  return 0;
}

export function getAccessibilityScores(building: BuildingAccessibilityData) {
  const totalEntrances = building.entrances.length;
  const accessibleEntrances = building.entrances.filter(isAccessibleEntrance);
  const accessibleCount = accessibleEntrances.length;
  const availabilityPercent =
    totalEntrances === 0 ? 0 : Math.round((accessibleCount / totalEntrances) * 100);

  const mainAccessibleEntrance = accessibleEntrances.find(
    (entrance) =>
      entrance.isMainEntrance &&
      entrance.entranceVisibility === "high" &&
      !entrance.requiresDetour,
  );

  const mostVisibleAccessibleEntrance = accessibleEntrances.reduce<Entrance | null>(
    (best, entrance) => {
      if (!best) return entrance;
      return visibilityWeight(entrance.entranceVisibility) >
        visibilityWeight(best.entranceVisibility)
        ? entrance
        : best;
    },
    null,
  );

  let experience: AccessExperienceScore = "Not accessible";

  if (accessibleCount > 0) {
    if (mainAccessibleEntrance) {
      experience = "Equal access";
    } else if (
      accessibleEntrances.some((entrance) => entrance.entranceVisibility === "low")
    ) {
      experience = "Technically accessible";
    } else if (
      accessibleEntrances.some((entrance) => entrance.requiresDetour) ||
      accessibleEntrances.every((entrance) => !entrance.isMainEntrance)
    ) {
      experience = "Accessible, but inconvenient";
    } else {
      experience = "Technically accessible";
    }
  }

  const promptIndex =
    (building.title.length + accessibleCount + totalEntrances) %
    REFLECTIVE_PROMPTS.length;

  return {
    totalEntrances,
    accessibleCount,
    availabilityPercent,
    experience,
    reflectivePrompt: REFLECTIVE_PROMPTS[promptIndex],
    strongestAccessibleEntrance: mostVisibleAccessibleEntrance,
  };
}
