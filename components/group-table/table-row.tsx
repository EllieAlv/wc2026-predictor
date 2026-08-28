"use client";

import CountryLabel from "../country-label";
import StatLabel from "../stat-label";
import StatLable from "../stat-label";

const teamStats: string[] = [
  "Games Played",
  "Games Won",
  "Games Tied",
  "Games Lost",
  "Goals For",
  "Goals Against",
  "Goal Difference",
  "Points",
];

interface TableRowProps {
  group: string;
  index: number;
  country: string;
}

export default function TableRow({
  group,
  index,
  country,
}: TableRowProps): React.JSX.Element {
  //#EDEADE is the hex color for alabaster
  //<label className="text-center" key={`${stat}${statIndex}`}
  return (
    <div className="grid grid-cols-[1fr_2fr_repeat(8,1fr)] grid-flow-col bg-[#EDEADE] py-2 rounded-md">
      <label className="text-center">{index + 1}</label>
      <CountryLabel
        countryName={country}
        fileName={`${group}${index + 1} ${country}`}
        flagPosition="left"
        justifyOption="justify-center"
      />
      {teamStats.map((stat: string, statIndex: number) => (
        <StatLabel key={`${stat}${statIndex}`}>0</StatLabel>
      ))}
    </div>
  );
}
