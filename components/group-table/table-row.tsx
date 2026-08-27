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

export default function TableRow({
  group,
  index,
  country,
}: TableRowProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-[1fr_2fr_repeat(8,1fr)] grid-flow-col py-2">
      <label className="text-center">{index + 1}</label>
      <CountryLabel
        countryName={country}
        fileName={`${group}${index + 1} ${country}`}
        leftMargin={"4rem"}
      />
      {teamStats.map((stat: string, statIndex: number) => (
        <label className="text-center" key={`${stat}${statIndex}`}>
          0
        </label>
      ))}
    </div>
  );
}
