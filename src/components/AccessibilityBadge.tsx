import type { BuildingBadge } from "@/types/accessibility";
import { badgeMeta, tagMeta } from "@/lib/accessibilityMeta";

type AccessibilityBadgeProps = {
  badge: BuildingBadge;
  size?: "sm" | "md";
};

function AccessibilityBadge({
  badge,
  size = "md",
}: AccessibilityBadgeProps) {
  const badgeStyle = badgeMeta[badge];
  const toneStyle = tagMeta[badgeStyle.tone];

  return (
    <span
      className={`rounded-full border font-semibold tracking-[0.02em] ${
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs"
      }`}
      style={{
        backgroundColor: toneStyle.bg,
        color: toneStyle.text,
        borderColor: toneStyle.border,
      }}
    >
      {badgeStyle.label}
    </span>
  );
}

export default AccessibilityBadge;
