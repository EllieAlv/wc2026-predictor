/*Component has the country's flag and name. It is used as part of the group table, the list of group games, and the in the knockout stage games.
textReSize is used for changing the div's font to xs, to allow for longer strings to fit inside the component
flagPosition, either "left" or "right", indicates where the flag should appear. Thus, the component can be reused accross the app
justifyOption determines whether the text and flag are centered or starts on the left side of the div
textOnly is used for the knockout stage page, for the CountryLabels where the qualified team is not known*/

import Image from "next/image";

interface CountryProp {
  countryName: string;
  textReSize?: boolean;
  flagPosition?: string;
  justifyOption?: string;
  textOnly?: boolean;
}

export default function CountryLabel({
  countryName,
  textReSize,
  flagPosition,
  justifyOption,
  textOnly,
}: CountryProp): React.JSX.Element {
  const filePath = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/flags/${countryName}.png`;

  //Default for the flag location is to the left of the country's name
  flagPosition ? flagPosition : (flagPosition = "left");
  //Default is justify-center if no justify preference is provided
  justifyOption ? justifyOption : (justifyOption = "justify-center");
  //Default is false. Meaning the component loads a flag image from S3 by default
  textOnly ? textOnly : (textOnly = false);
  const csstextSize: string =
    countryName.length > 17 && textReSize ? "text-xs" : "";
  const cssClasses: string = `flex flex-nowrap items-center ${justifyOption}`; //bg-amber-400

  return (
    <div className={cssClasses}>
      {flagPosition === "right" && (
        <div className="flex items-center shrink-0 mr-1.5">
          <label className="">{countryName}</label>
        </div>
      )}
      {!textOnly && (
        <Image
          className="w-9 h-6 object-fill"
          src={filePath}
          alt={`Flag of ${countryName}`}
          width={500}
          height={500}
        />
      )}
      {flagPosition === "left" && (
        <div className="flex items-center shrink-0 ml-1.5">
          <label className={csstextSize}>{countryName}</label>
        </div>
      )}
    </div>
  );
}
