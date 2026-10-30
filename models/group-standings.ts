import { TeamStanding } from "./team-standing";

export interface GroupStandings {
  group: string;
  standing: number;
  stats: TeamStanding;
}
