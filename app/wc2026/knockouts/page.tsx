import KnockoutColumns from "../../../components/knockouts/knockout-columns";

export default function Knockouts() {
  return (
    <>
      <main className="bg-white h-dvh">
        <div className="flex justify-center mt-14">
          <label className="font-bold text-3xl">Knockout Round</label>
        </div>
        <KnockoutColumns />
      </main>
    </>
  );
}
