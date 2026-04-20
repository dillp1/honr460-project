import { House } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { honorsSouth } from "@/data/buildings/honorsSouth";

function HonorsSouthCard() {
  return <BuildingAccessibilityCard building={honorsSouth} Icon={House} />;
}

export default HonorsSouthCard;
