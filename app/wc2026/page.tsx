import MainHeader from "../../components/main-header";
import GroupMenu from "../../components/group-menu";
import CountryLabel from "../../components/country-label";

export default function Wc2026() {
  return (
    <>
      <MainHeader />
      <GroupMenu />
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
