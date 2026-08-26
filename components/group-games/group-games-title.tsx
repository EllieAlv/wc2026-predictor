"use client"

import React from "react";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";

export default function GroupGamesTitle(): React.JSX.Element {
  const group = useAppSelector((state: RootState) => state.group.groupName);

  return (
    <div className="flex flex-col lg:mx-16 xl:mx-60 h-7 mt-30 font-bold border-b-[3] border-b-black">
      <h2>Group {group} games</h2>
    </div>
  );
}
