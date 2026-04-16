import { Orbit } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { physicsBuilding } from "@/data/buildings/physicsBuilding";

function CaseStudy2() {
  return (
    <BuildingAccessibilityCard building={physicsBuilding} Icon={Orbit} />
  );
}

export default CaseStudy2;
