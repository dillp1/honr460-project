import { BookOpen } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { walc } from "@/data/buildings/walc";

function WalcCard() {
  return <BuildingAccessibilityCard building={walc} Icon={BookOpen} />;
}

export default WalcCard;
