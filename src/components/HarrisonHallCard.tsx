import { House } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { harrisonHall } from "@/data/buildings/harrisonHall";

function HarrisonHallCard() {
  return <BuildingAccessibilityCard building={harrisonHall} Icon={House} />;
}

export default HarrisonHallCard;
