const round: string[] = [
  "Round of 32",
  "Round of 16",
  "Quarter finals",
  "Semi finals",
];

export default function KnockoutHeaders(): React.JSX.Element {
  const rightSideBracket = round.toReversed();

  return (
    <div className="grid grid-cols-9 mt-5">
      {round.map((roundName: string) => (
        <label key={roundName} className="font-bold text-center">{roundName}</label>
      ))}
      <label className="font-bold text-center">Final</label>
      {rightSideBracket.map((roundName: string) => (
        <label key={roundName} className="font-bold text-center">{roundName}</label>
      ))}
    </div>
  );
}
