"use client";

import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";

const headers: string[] = [
  "Position",
  "Country",
  "Games Played",
  "Games Won",
  "Games Tied",
  "Games Lost",
  "Goals For",
  "Goals Against",
  "Goal Difference",
  "Points",
];

export default function TableHeaders() {
  const headerColor = useAppSelector(
    (state: RootState) => state.group.background,
  );
  const color = useAppSelector((state: RootState) => state.group.color);

  return (
    //Div for the grid that will hold the headers
    <div className="grid grid-cols-[1fr_2fr_repeat(8,1fr)] grid-flow-col mb-1">
      {headers.map((header) => (
        //Each header is inside a flexbox inside a div
        <div
          className={"flex justify-center mt-0.75 h-6 font-bold rounded border-2 border-x px-0.5 border-x-black"}
          style={{ color: color, background: headerColor }}
          key={header}
        >
          <label className="whitespace-nowrap text-center h-3" key={header}>
            {header}
          </label>
        </div>
      ))}
    </div>
  );
}
