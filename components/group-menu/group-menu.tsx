"use client";

import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import { selectGroup } from "../../lib/features/groupSlice";
import { getGroupNames } from "../../lib/get-groups";
import { Group } from "../models/group";
import Button from "./top-menu-button";

export default function GroupMenu() {
  //Redux hooks used for main menu interaction
  const selectedGroup = useAppSelector(
    (state: RootState) => state.group.groupName,
  );
  const dispatch = useAppDispatch();
  const { data: groupsData, isSuccess, error } = useGetGroupsDataQuery();
  //String array used to display the main menu options
  const groupNames: string[] = isSuccess ? getGroupNames(groupsData) : [];

  //Gives red text to the selected button and white text to the others
  function handleMenuClick(groupName: string) {
    const newSelectedGroup: Group = groupsData.find(
      (group: Group) => "Group " + group.groupName === groupName,
    );
    
    dispatch(selectGroup(newSelectedGroup));
  }

  return (
    <div className="flex justify-start xl:justify-center h-16 bg-[#000000]">
      <menu className="flex flex-row items-center flex-wrap md:flex-nowrap">
        {groupNames.map((menuItem) => {
          const isSelected = menuItem === "Group " + selectedGroup;
          const buttonClass = isSelected
            ? "text-red-500 bg-[#000000] hover:bg-[#1A1A1A]"
            : "text-white bg-[#000000] hover:text-red-500 hover:bg-[#1A1A1A]";
          return (
            <li key={menuItem} className="">
              <Button onButtonClick={handleMenuClick} cssClasses={buttonClass}>
                {menuItem}
              </Button>
            </li>
          );
        })}
      </menu>
    </div>
  );
}
