import { RootState } from "./store";
import { useAppSelector } from "./hooks";
import { Group } from "../components/models/group";

export function getTeamSeed(teamName: string): number {
  const countries: string[] = useAppSelector(
    (state: RootState) => state.group.countries,
  );

  return countries.findIndex((team: string) => team === teamName) + 1;
}

export function getGroupNames(groups: Group[]): string[] {
  let groupNames: string[] = [];

  groups.forEach((group: Group) => {
    groupNames.push("Group " + group.groupName);
  });

  const allNames: string[] = [...groupNames, "Knockout round"];
  return allNames;
}
