import { Group } from "../components/models/group";

export function getGroup(groupName: string): string[] {
  return [];
}

export function getGroupNames(groups: Group[]): string[] {
  let groupNames: string[] = [];

 groups.forEach((group) => {
    groupNames.push("Group " + group.groupName);
  });
  
  const allNames: string[] = [...groupNames, "Knockout round"]
  return allNames;
}
