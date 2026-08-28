"use client";

import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";

const headers: string[] = [
  "Match ID",
  "Date",
  "Team 1",
  "Score",
  "Team 2",
  "Location",
];

export default function GroupGamesHeader(): React.JSX.Element {
  const groupColor: string = useAppSelector(
    (state: RootState) => state.group.color,
  );
  const groupBGColor: string = useAppSelector(
    (state: RootState) => state.group.background,
  );

  return (
    <div className="grid grid-flow-col grid-cols-[repeat(2,1fr)_1.6fr_1fr_1.6fr_2fr] my-1 lg:mx-10 xl:mx-20 gap-x-0.5">
      {headers.map((header: string, index: number) => (
        <label
          className={`text-center font-bold rounded-md`}
          style={{
            backgroundColor: groupBGColor,
            color: groupColor,
            outline: groupBGColor === "#FFFFFF" ? "2px solid" : "none",
            outlineOffset: groupBGColor === "#FFFFFF" ? "-2px" : "none",
          }}
          key={index}
        >
          {header}
        </label>
      ))}
    </div>
  );
}
