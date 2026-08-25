import { getGroupsData } from "../app/api/get-group-data";
import { useAppDispatch } from "./hooks";
import { loadGroups } from "./features/groupsSlice";
import groupsdata from "../app/data/groups.json";
import { Group } from "../components/models/group";

export function getGroups(): string[] {
  let groups: string[] = [];

  groupsdata.forEach((team) => {!groups.includes("Group " + team.Group) && groups.push("Group " + team.Group)});
  //useSetGroups();

  return groups;
}

export function getGroup(groupName: string): string[] {
  return [];
}

export async function setGroups() {
  /*const groupsData: Group[] = await getGroupsData();
  //Redux hooks used for main menu interaction
  //const groups = useAppSelector((state: RootState) => state);
  
  const dispatch = useAppDispatch();

  dispatch(loadGroups(groupsData));*/
}