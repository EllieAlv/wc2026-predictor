import React from "react";
import CountryLabel from "../country-label";

const countries: string[] = [
  "Canada",
  "Bosnia and Herzegovina",
  "Qatar",
  "Switzerland",
];

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

export default function TableRow() {
  return (
    <>
      {countries.map((team, index) => (
        <React.Fragment key={team}>
          <label className="text-center" key={index}>
            {index + 1}
          </label>
          <CountryLabel countryName={team} filename={`B${index + 1} ${team}`} />
          {teamStats.map((stat, index) => (
            <label className="text-center" key={`${stat}${index}`}>
              0
            </label>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
