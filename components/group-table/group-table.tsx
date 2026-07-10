import { ReactNode } from "react";
import TableTitle from "./table-title";
import TableHeaders from "./table-headers";
import TableRow from "./table-row";

export default function GroupTable() {
  return (
    <div className="flex flex-col mx-0 lg:mx-[8vw] xl:mx-[20vw]">
      <TableTitle>Group B</TableTitle>
      <div className="grid grid-cols-[1fr_auto_repeat(6,1fr)_auto_1fr] gap-1">
        <TableHeaders />
        <TableRow />
      </div>
    </div>
  );
}
