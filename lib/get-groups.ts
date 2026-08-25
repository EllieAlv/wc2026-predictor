import groupsdata from "../app/data/groups.json";
import { Group } from "../components/models/group";

export function getGroups(): string[] {
  let groups: string[] = [];

  groupsdata.forEach((team) => {
    !groups.includes("Group " + team.groupName) &&
      groups.push("Group " + team.groupName);
  });

  return groups;
}

export function getGroup(groupName: string): string[] {
  return [];
}

export function getGroupNames(groups: Group[]): string[] {
  let groupNames: string[] = [];

  console.log("Groups: ", groups);
  groups.forEach((group) => {
    groupNames.push(group.groupName);
  });
  return groupNames;
}
