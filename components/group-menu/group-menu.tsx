"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import { selectGroup } from "../../lib/features/groupSlice";
import { getGroups } from "../../lib/get-groups";
import Button from "./top-menu-button";

export default function GroupMenu() {
  //Redux hooks used for main menu interaction
  const selectedGroup = useAppSelector(
    (state: RootState) => state.group.selectedGroup,
  );
  const dispatch = useAppDispatch();
  //String array used to display the main menu options
  const groups: string[] = [...getGroups(), "Knockout round"];
  //State array and string array used for main menu UI interaction feedback
  const [buttonClasses, setButtonClasses] = useState<string[]>([]);
  const cssClassesArray: string[] = [];

  //useEffect hook used for correctly loading the UI colors of the main menu buttons while preventing infinite re-renders
  useEffect(() => {
    groups.map((item) =>
      item === selectedGroup
        ? cssClassesArray.push("text-red-500 bg-[#000000]")
        : cssClassesArray.push("text-white bg-[#000000]"),
    );
    setButtonClasses(cssClassesArray);
  }, [selectedGroup]);

  //Gives red text to the selected button and white text to the others
  function handleMenuClick(group: string) {
    dispatch(selectGroup(group));
    groups.map((item) =>
      item === selectedGroup
        ? cssClassesArray.push("text-red-500 bg-[#000000]")
        : cssClassesArray.push("text-white bg-[#000000]"),
    );
    setButtonClasses(cssClassesArray);
  }

  //Gives red text and gray background to the button being hover over
  function handleButtonMouseOver(button: string) {
    groups.map((item) =>
      item === button
        ? cssClassesArray.push("text-red-500 bg-[#1A1A1A]")
        : item === selectedGroup ? cssClassesArray.push("text-red-500 bg-[#000000]") : cssClassesArray.push("text-white bg-[#000000]"),
    );
    setButtonClasses(cssClassesArray);
  }

  //Returns a black background to the button on mouse out. Gives red text to the selected group and white text to the others
  function handleButtonMouseOut() {
    groups.map((item) =>
      item === selectedGroup
        ? cssClassesArray.push("text-red-500 bg-[#000000]")
        : cssClassesArray.push("text-white bg-[#000000]"),
    );
    setButtonClasses(cssClassesArray);
  }

  return (
    <div className="flex justify-center h-16 bg-[#000000]">
      <menu className="flex flex-row items-center">
        {groups.map((menuItem, index) => (
          <li key={menuItem}>
            <Button
              onButtonClick={handleMenuClick}
              onButtonMouseOver={handleButtonMouseOver}
              onButtonMouseOut={handleButtonMouseOut}
              cssClasses={buttonClasses[index]}
            >
              {menuItem}
            </Button>
          </li>
        ))}
      </menu>
    </div>
  );
}
