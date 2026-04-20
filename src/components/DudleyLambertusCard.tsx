import { HardHat } from "lucide-react";
import BuildingAccessibilityCard from "./BuildingAccessibilityCard";
import { dudleyLambertus } from "@/data/buildings/dudleyLambertus";

function DudleyLambertusCard() {
  return (
    <BuildingAccessibilityCard building={dudleyLambertus} Icon={HardHat} />
  );
}

export default DudleyLambertusCard;
