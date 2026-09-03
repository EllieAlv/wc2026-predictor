"use client";

import { RootState } from "../lib/store";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { useEffect, useState } from "react";
import { addResult } from "../lib/features/resultsSlice";
import { GameResult } from "./models/game-result";
import { TeamData } from "./models/team-data";

interface teamDataProp {
  teamInfo: TeamData;
}

export default function ScoreInput({
  teamInfo,
}: teamDataProp): React.JSX.Element {
  const gameScore: GameResult | undefined = useAppSelector((state: RootState) =>
    state.results.find(
      (score: GameResult) => score.matchID === teamInfo.matchID,
    ),
  );
  const groupName: string = useAppSelector(
    (state: RootState) => state.group.groupName,
  );
  const dispatch = useAppDispatch();
  const goalsScored: string =
    teamInfo.team === "A"
      ? (gameScore?.teamAScore ?? "")
      : (gameScore?.teamBScore ?? "");
  const [inputValue, setInputValue] = useState<string>(goalsScored);

  useEffect(() => {
    setInputValue(goalsScored);
  }, [groupName]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const enteredValue: string = e.target.value;
    const numericValue: string = enteredValue.replace(/[^0-9]/g, "");

    setInputValue(numericValue);
  }

  function handleInputBlur(e: React.ChangeEvent<HTMLInputElement>) {
    let newGameScore: GameResult = {
      matchID: teamInfo.matchID,
      teamAScore: null,
      teamBScore: null,
      wasPlayed: false,
    };
    let score: string = e.target.value;
    const isDifferent: boolean = goalsScored !== score;

    //if focus is lost with a number entered
    if (isDifferent) {
      //It assigns the input value to either teamAScore or teamBScore depending on the input being updated
      teamInfo.team === "A"
        ? (newGameScore.teamAScore = score)
        : (newGameScore.teamBScore = score);
      //If there was a previous entry, it updates 'newGameScore' with the existing data
      if (gameScore && teamInfo.team === "B")
        newGameScore.teamAScore = gameScore.teamAScore;
      if (gameScore && teamInfo.team === "A")
        newGameScore.teamBScore = gameScore.teamBScore;
      /*newGameScore.teamAScore = gameScore && teamInfo.team === "B" ? gameScore?.teamAScore : null;
      newGameScore.teamBScore = gameScore && teamInfo.team === "A" ? gameScore?.teamBScore : null;*/
      if (newGameScore.teamAScore !== null && newGameScore.teamBScore !== null)
        newGameScore.wasPlayed = true;
      dispatch(addResult(newGameScore));
    }
  }

  return (
    <input
      className="bg-white border-black text-center w-9"
      type="text"
      inputMode="numeric"
      placeholder="0"
      maxLength={2}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      value={inputValue}
    ></input>
  );
}
