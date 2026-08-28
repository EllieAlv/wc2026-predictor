import GroupGamesContainer from "./group-game-container";
import GroupGamesHeader from "./group-games-header";
import GroupGamesTitle from "./group-games-title";

export default function GroupGames(): React.JSX.Element {
  return (
    <>
      <div className="flex flex-col mx-0 lg:mx-16 xl:mx-60">
        <GroupGamesTitle />
        <GroupGamesHeader />
        <GroupGamesContainer />
      </div>
      {/*#2596BE */} {/* #0c7377*/}
      <div className="flex flex-col mx-0 lg:mx-16 xl:mx-60 bg-[#E42518] my-20">
        <label className="text-[#D3C084] font-bold text-center">Portugal</label>
      </div>
    </>
  );
}
