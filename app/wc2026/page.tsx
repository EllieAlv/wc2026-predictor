import MainHeader from "../../components/main-header";
import GroupMenu from "../../components/group-menu/group-menu";
import GroupTable from "../../components/group-table/group-table";
import GroupGames from "../../components/group-games/group-games";

export default function Wc2026() {
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
