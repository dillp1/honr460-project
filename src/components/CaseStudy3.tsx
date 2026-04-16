import { ChefHat } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { windsorDiningCourt } from "@/data/buildings/windsorDiningCourt";

function CaseStudy3() {
  return (
    <BuildingAccessibilityCard building={windsorDiningCourt} Icon={ChefHat} />
  );
}

export default CaseStudy3;
