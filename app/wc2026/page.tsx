import MainHeader from "../../components/main-header";
import GroupMenu from "../../components/group-menu/group-menu";
import GroupTable from "../../components/group-table/group-table";
import GroupGames from "../../components/group-games/group-games";
import { getGroupsData } from "../api/get-group-data";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import { loadGroups } from "../../lib/features/groupsSlice";
import { Group } from "../../components/models/group";

export default async function Wc2026() {
  const selectedGroup = useAppSelector(
      (state: RootState) => state.group.groupName,
    );
  const groupsData: Group[] = await getGroupsData();
  const dispatch = useAppDispatch();

  dispatch(loadGroups(groupsData));

  return (
    <>
      <MainHeader />
      <GroupMenu />
      <main>
        <GroupTable />
        <GroupGames />
      </main>
    </>
  );
}
