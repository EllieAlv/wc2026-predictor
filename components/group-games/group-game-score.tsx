import ScoreInput from "../score-input";
import { TeamData } from "../models/team-data";

interface TeamDataProp {
  teamA: TeamData;
  teamB: TeamData
}

export default function GroupGameScore({
  teamA, teamB
}: TeamDataProp): React.JSX.Element {
  return (
    <div className="flex flex-row justify-center">
      <ScoreInput teamInfo={teamA}></ScoreInput>
      <label className="mx-3">-</label>
      <ScoreInput teamInfo={teamB}></ScoreInput>
    </div>
  );
}
