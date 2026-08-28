/*Component has the country's flag and name. It is used as part of the group table, the list of group games, and the in the knockout stage games.
Left margin is received as a prop to allow for the component to be used in different places.*/

import Image from "next/image";

interface Country {
  countryName: string;
  fileName: string;
  flagPosition?: string;
  justifyOption?: string;
}

const flagImagePath: string = "/images/flags/";

export default function CountryLabel({
  countryName,
  fileName,
  flagPosition,
  justifyOption,
}: Country): React.JSX.Element {
  //Default for the flag location is to the left of the country's name
  flagPosition ? flagPosition : (flagPosition = "left");
  //Default is justify-center if no justify preference is provided
  justifyOption ? justifyOption : (justifyOption = "justify-center");
  const cssClasses: string = `flex flex-nowrap items-center ${justifyOption} mx-4`;

  return (
    <div className={cssClasses}>
      {flagPosition === "right" && (
        <div className="flex items-center shrink-0 mr-1.5">
          <label>{countryName}</label>
        </div>
      )}
      <Image
        className="w-9 h-6 object-fill"
        src={flagImagePath + fileName + ".png"}
        alt={`Flag of ${countryName}`}
        width={500}
        height={500}
      />
      {flagPosition === "left" && (
        <div className="flex items-center shrink-0 ml-1.5">
          <label>{countryName}</label>
        </div>
      )}
    </div>
  );
}
