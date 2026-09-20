"use client";

import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import Groups from "./groups/page";
import Knockouts from "./knockouts/page";

export default function WC2026() {
  const menuSelection: string = useAppSelector(
    (state: RootState) => state.group.groupName,
  );

  return <>{menuSelection !== "Knockout round" ? <Groups /> : <Knockouts />}</>;
}
