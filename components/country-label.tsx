import Image from "next/image";

interface Country {
  countryName: string;
  filename: string;
}

const flagImagePath: string = "/images/flags/";

export default function CountryLabel({ countryName, filename }: Country) {
  return (
    <div className="flex flex-nowrap">
      <Image
        className="w-12 h-auto"
        src={flagImagePath + filename + ".png"}
        alt={`Flag of ${countryName}`}
        width={400}
        height={400}
      />
      <label>{countryName}</label>
    </div>
  );
}
