import ScoreInput from "../score-input";

export default function GroupGameScore(): React.JSX.Element {
  return (
    <div className="flex flex-row justify-center">
      <ScoreInput></ScoreInput>
      <label className="mx-3">-</label>
      <ScoreInput></ScoreInput>
    </div>
  );
}
