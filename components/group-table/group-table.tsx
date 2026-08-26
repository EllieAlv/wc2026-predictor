"use client"

import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import TableTitle from "./table-title";
import TableHeaders from "./table-headers";
import TableRow from "./table-row";

export default function GroupTable() {
  const selectedGroup = useAppSelector((state: RootState)=>state.group.groupName);
  const countries = useAppSelector((state: RootState)=>state.group.countries);
  
  return (
    <div className="flex flex-col mx-0 lg:mx-16 xl:mx-60">
      <TableTitle>Group {selectedGroup}</TableTitle>
      {/*<div className="grid grid-cols-[1fr_auto_repeat(6,1fr)_auto_1fr]">*/}
        <TableHeaders />
        {countries.map((country, index)=><TableRow key={index} group={selectedGroup} index={index} country={country} />)}
      {/*</div>*/}
    </div>
  );
}
