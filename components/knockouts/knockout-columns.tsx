const round: string[] = [
  "Round of 32",
  "Round of 16",
  "Quarter finals",
  "Semi finals",
];

export default function KnockoutColumns() {
  return <div className="grid grid-cols-9">
    {round.map((roundName: string)=><label key={roundName}>{roundName}</label>)}
    <label>Final</label>
    {/*round.map(())*/}
  </div>;
}