import { ReactNode } from "react";
import TableTitle from "./table-title";
import TableHeaders from "./table-headers";
import TableRow from "./table-row";

export default function GroupTable() {
  return (
    <>
      <TableTitle>Group B</TableTitle>
      <div className="grid grid-cols-[1fr_auto_repeat(6,1fr)_auto_1fr] gap-1 mx-[20vw]">
        <TableHeaders />
        <TableRow />
      </div>
    </>
  );
}
