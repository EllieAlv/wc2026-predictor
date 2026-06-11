import groupsdata from "../app/data/groups.json";

export function getGroups(): string[] {
  let groups: string[] = [];

  groupsdata.forEach((team) => {!groups.includes("Group " + team.Group) && groups.push("Group " + team.Group)});

  return groups;
}

export function getGroup() {}
