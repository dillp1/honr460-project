import type { BuildingBadge, PrimaryTag } from "@/types/accessibility";

export const tagMeta: Record<
  PrimaryTag,
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

export const badgeMeta: Record<
  BuildingBadge,
  { label: string; tone: PrimaryTag }
> = {
  "step-free": {
    label: "Step-Free",
    tone: "ramp",
  },
  "ada-button": {
    label: "ADA Button",
    tone: "ada-button",
  },
  "ramp-access": {
    label: "Ramp Access",
    tone: "ramp",
  },
  elevator: {
    label: "Elevator",
    tone: "standard",
  },
  "limited-access": {
    label: "Limited Access",
    tone: "stairs",
  },
};
