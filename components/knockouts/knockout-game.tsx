import CountryLabel from "../country-label";
import ScoreInput from "../score-input";

interface MatchProp {
  date: string;
  teamA: string;
  teamB: string;
  location: string;
}

export default function KnockoutGame({
  date,
  teamA,
  teamB,
  location,
}: MatchProp): React.JSX.Element {
  //#EDEADE is the hex color for alabaster
  return (
    <div className="grid grid-row-3 bg-[#EDEADE] mt-2">
      <div className="flex justify-center bg-white">
        <label>
          {`${date.slice(0, date.indexOf(","))} `}-
          {` ${location.slice(location.indexOf(",") + 2)}`}
        </label>
      </div>
      <div className="flex flex-nowrap justify-between p-1">
        <CountryLabel
          countryName={teamA} //South Korea
          justifyOption="justify-start"
          textOnly={true}
        ></CountryLabel>
        {/*<ScoreInput />*/}
        <input
          className="w-6 bg-white"
          type="text"
          inputMode="numeric"
          placeholder="0"
        />
      </div>
      <div className="flex flex-nowrap justify-between p-1">
        <CountryLabel
          countryName={teamB} //"Bosnia and Herzegovina"
          //textReSize={true}
          justifyOption="justify-start"
          textOnly={true}
        ></CountryLabel>
        <input
          className="w-6 bg-white"
          type="text"
          inputMode="numeric"
          placeholder="0"
        />
      </div>
    </div>
  );
}
