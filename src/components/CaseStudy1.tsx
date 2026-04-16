import { House } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { harrisonHall } from "@/data/buildings/harrisonHall";

function CaseStudy1() {
  return <BuildingAccessibilityCard building={harrisonHall} Icon={House} />;
}

export default CaseStudy1;
