//null values are used in existing 'GameResult' records where the user has not entered the score for that team
export interface GameResult {
  matchID: string;
  teamAScore: string | null;
  teamBScore: string | null;
  wasPlayed: boolean;
}
