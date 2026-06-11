import MainHeader from "../../components/main-header";
import GroupMenu from "../../components/group-menu";
import GroupTable from "../../components/group-table/group-table";

export default function Wc2026() {
  return (
    <>
      <MainHeader />
      <GroupMenu />
      <main>        
        <GroupTable />
      </main>
    </>
  );
}
