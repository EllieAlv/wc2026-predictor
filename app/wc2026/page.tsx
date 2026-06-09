import CountryLabel from "../../components/country-label";

export default function Wc2026() {
  return (
    <>
      <header className="bg-[#010d1e] text-white">
        <div className="flex h-[8vh] justify-center">
          <h1>FIFA World Cup 26™ predictor</h1>
        </div>
      </header>
      <main>
        <p></p>
        <CountryLabel
          countryName="Canada"
          countryFlagURL="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/40px-Flag_of_Canada_%28Pantone%29.svg.png"
        />
      </main>
    </>
  );
}
