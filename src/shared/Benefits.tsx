import { AcademicCap, ModernHome, UserGroup } from "@/assets/Icons";

import { BenefitType } from "./types";

const BenefitList: Array<BenefitType> = [
  {
    icon: <ModernHome/>,
    title: "Power of Perseverance",
    description:
      "In sports, enduring challenges goes beyond physical strength—its a mental triumph where champions are born through unwavering determination.",
  },
  {
    icon: <AcademicCap/>,
    title: "Athletic Symphony",
    description:
      "Sports is a rhythmic dance, a harmonious blend of individual skill and teamwork that transforms every game into a captivating performance.",
  },
  {
    icon: <UserGroup/>,
    title: "More Than Numbers",
    description:
      "Beyond the scoreboard, sports is a journey of self-discovery and camaraderie, where real victories are found in tales of discipline and the unyielding human spirit.",
  },
];



export default BenefitList;
