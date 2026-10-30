"use client";

import { RootState } from "../lib/store";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { useEffect, useState } from "react";
import { addResult } from "../lib/features/resultsSlice";
import { GameResult } from "../models/game-result";
import { TeamData } from "../models/team-data";
import { GameData } from "../models/game-data";
import { TeamStanding } from "../models/team-standing";
import { useGetGroupsDataQuery } from "../lib/features/fetchGroupsApi";
import { getGroupRanking } from "../lib/get-groups-data";
import { addTeams } from "../lib/features/standingsSlice";

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
  //Below 3 const are needed for getSortedGroup
  const { data: gamesList, isSuccess: gotGroupMatches } =
    useGetGroupsDataQuery("group matches.json");
  const { data: fifaRanking, isSuccess: gotFifaRanking } =
    useGetGroupsDataQuery("FIFA Ranking - June 11, 2026.json");
  const currentGroup: string[] = useAppSelector(
    (state: RootState) => state.group.countries,
  );
  const currentResults: GameResult[] = useAppSelector(
    (state: RootState) => state.results,
  );

  //To update the scores boxes when a new group gets selected by the user
  useEffect(() => {
    setInputValue(goalsScored);
  }, [groupName]);

  //To include the latest result in the group
  useEffect(() => {
    const sortedTeams: TeamStanding[] = currentResults.every(
      (result: GameResult) => result.wasPlayed === true,
    )
      ? getSortedGroup()
      : [];
  }, [currentResults]);

  //Collects all the result in the group, and gets an array with the teams sorted by standing
  function getSortedGroup(): TeamStanding[] {
    const groupGames: GameData[] = gotGroupMatches
      ? gamesList.filter(
          (game: GameData) => game.phase === `group ${groupName}`,
        )
      : [];
    const potentialResults: (GameResult | undefined)[] = groupGames.map(
      (game: GameData) =>
        currentResults.find(
          (result: GameResult) => result.matchID === game.match_id,
        ),
    );
    const results: GameResult[] = potentialResults?.filter(
      (result: GameResult | undefined) => result !== undefined,
    );
    const groupPositions: TeamStanding[] =
      results.length === 6 && gotFifaRanking
        ? getGroupRanking(currentGroup, { groupGames, results, fifaRanking })
        : [];

    if (groupPositions.length > 0) {
      dispatch(
        addTeams([
          { group: groupName, standing: 1, stats: groupPositions[0] },
          { group: groupName, standing: 2, stats: groupPositions[1] },
          { group: groupName, standing: 3, stats: groupPositions[2] },
        ]),
      );
    }

    return groupPositions;
  }

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
