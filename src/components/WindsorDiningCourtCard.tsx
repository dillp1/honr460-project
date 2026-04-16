import { ChefHat } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { windsorDiningCourt } from "@/data/buildings/windsorDiningCourt";

function WindsorDiningCourtCard() {
  return (
    <BuildingAccessibilityCard
      building={windsorDiningCourt}
      Icon={ChefHat}
    />
  );
}

export default WindsorDiningCourtCard;
