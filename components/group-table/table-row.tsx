"use client";

import CountryLabel from "../country-label";

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

export default function TableRow({ group, index, country }: TableRowProps) {
  return (
    <div className="grid grid-cols-[1fr_2fr_repeat(8,1fr)] grid-flow-col pt-2">      
      <label className="text-center">{index + 1}</label>
      <CountryLabel
        countryName={country}
        filename={`${group}${index + 1} ${country}`}
      />
      {teamStats.map((stat, statIndex) => (
        <label className="text-center" key={`${stat}${statIndex}`}>
          0
        </label>
      ))}
    </div>
  );
}
