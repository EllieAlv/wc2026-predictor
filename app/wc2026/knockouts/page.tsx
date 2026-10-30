import KnockoutColumns from "../../../components/knockouts/knockout-columns";
import KnockoutHeaders from "../../../components/knockouts/knockout-headers";

export default function Knockouts(): React.JSX.Element {
  return (
    <>
      <main className="bg-white h-dvh">
        {/*<div className="flex justify-center mt-8">
          <label className="font-bold text-2xl">Knockout Round</label>
        </div>*/}
        <KnockoutHeaders />
        <KnockoutColumns />
      </main>
    </>
  );
}
