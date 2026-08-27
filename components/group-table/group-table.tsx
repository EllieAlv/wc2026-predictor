"use client";

import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import TableTitle from "./table-title";
import TableHeaders from "./table-headers";
import TableRow from "./table-row";

export default function GroupTable(): React.JSX.Element {
  const selectedGroup: string = useAppSelector(
    (state: RootState) => state.group.groupName,
  );
  const countries: string[] = useAppSelector(
    (state: RootState) => state.group.countries,
  );

  return (
    <div className="flex flex-col mx-0 lg:mx-16 xl:mx-60">
      <TableTitle>Group {selectedGroup}</TableTitle>
      <TableHeaders />
      {countries.map((country: string, index: number) => (
        <TableRow
          key={index}
          group={selectedGroup}
          index={index}
          country={country}
        />
      ))}
    </div>
  );
}
