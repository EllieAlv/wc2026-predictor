import GroupGamesHeader from "./group-games-header";
import GroupGamesTitle from "./group-games-title";

export default function GroupGames(): React.JSX.Element {
  return (
    <>
      <GroupGamesTitle />
      <GroupGamesHeader />

      <div>
        <label></label>
      </div>
      <div>
        {/*<!-- Container that controls the layout structure -->}*/}
        <div className="w-full max-w-300 mx-auto p-6 mt-20">
          {/*<!-- Responsive Grid: 1 column on mobile, 3 columns on desktop -->}*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*<!-- Dashboard Card Component -->}*/}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
              <div className="flex items-center space-x-4">
                {/*<!-- Fixed Pixels: Perfect for icons or avatars -->*/}
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                {/*<!-- Tailwind Scale: Flex-1 fills remaining percentage space dynamically -->}*/}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500 truncate">
                    Total Revenue
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    $48,259.50
                  </h3>
                </div>
              </div>
              {/*<!-- Tailwind Scale: Standard top margin for spacing stability -->}*/}
              <div className="mt-4">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +12% from last month
                </span>
              </div>
            </div>
            {/*Card div */}
          </div>
        </div>
        {/*Div for the container*/}
      </div>
    </>
  );
}
