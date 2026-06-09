import Image from "next/image";

interface Country {
    countryName: string,
    countryFlagURL: string,
}

export default function CountryLabel({countryName, countryFlagURL} : Country) {
    return <div className="flex justify-center bg-blue-500">
        <Image className="w-12 h-auto" src={countryFlagURL} alt={`Flag of ${countryName}`} width={400} height={400}/>
        <label>{countryName}</label>
    </div>
}