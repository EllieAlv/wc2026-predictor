import { getGroups } from "../../lib/get-groups";
import Button from "../top-menu-button";

export default function GroupMenu() {
  const groups = [...getGroups(), "Knockout round"];

  return (
    <div className="flex justify-center h-16 bg-[#000000]">
      <menu className="flex flex-row items-center">
        {groups.map((item)=><li key={item}><Button>{item}</Button></li>)}
      </menu>
    </div>
  );
}
