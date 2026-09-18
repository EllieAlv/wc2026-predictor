import GroupTable from "../../components/group-table/group-table";
import GroupGames from "../../components/group-games/group-games";

export default function Groups() {
  return (
    <>
      <main className="bg-white h-dvh">
        <GroupTable />
        <GroupGames />
      </main>
    </>
  );
}
