interface gameResult {
  teamAScore: number;
  teamBScore: number;
}

//Define type of state
export interface GroupResults {
  groupName: string;
  gameResults: gameResult[]; //eg. = [{teamAScore: 1, teamBScore: 1}, {teamAScore: 6, teamBScore: 0}]
  numberOfGamesPlayed: number;
}
