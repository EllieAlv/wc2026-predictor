/*Component has the country's flag and name. It is used as part of the group table, the list of group games, and the in the knockout stage games.
Left margin is received as a prop to allow for the component to be used in different places.*/

import Image from "next/image";

interface Country {
  countryName: string;
  fileName: string;
  leftMargin: string;
}

const flagImagePath: string = "/images/flags/";

export default function CountryLabel({
  countryName,
  fileName,
  leftMargin,
}: Country): React.JSX.Element {
  const margin: string = leftMargin;

  return (
    <div
      className="flex flex-nowrap items-center"
      style={{ marginLeft: margin }}
    >
      <Image
        className="w-9 h-6 object-fill"
        src={flagImagePath + fileName + ".png"}
        alt={`Flag of ${countryName}`}
        width={500}
        height={500}
      />
      <div className="flex items-center ml-1.5">
        <label>{countryName}</label>
      </div>
    </div>
  );
}
