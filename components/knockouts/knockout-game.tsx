import CountryLabel from "../country-label";
import ScoreInput from "../score-input";

interface Match {
  teamA: string;
  teamB: string;
}

export default function KnockoutGame(): React.JSX.Element {
  //#EDEADE is the hex color for alabaster
  return (
    <div className="grid grid-row-3 bg-[#EDEADE] mt-2">
      <div className="flex justify-center bg-white"><label>July 1 - Vancouver</label></div>
      <div className="flex flex-nowrap justify-between p-1">
        <CountryLabel countryName="South Korea" justifyOption="justify-start" ></CountryLabel>
        {/*<ScoreInput />*/}
        <input className="w-6 bg-white" type="text" inputMode="numeric" placeholder="0" />
      </div>
      <div className="flex flex-nowrap justify-between p-1">
        <CountryLabel countryName="Bosnia and Herzegovina" textReSize={true} justifyOption="justify-start"></CountryLabel>
        <input className="w-6 bg-white" type="text" inputMode="numeric" placeholder="0" />
      </div>
    </div>
  );
}
