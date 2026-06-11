const headers: string[] = [
  "Position",
  "Country",
  "Games Played",
  "Games Won",
  "Games Tied",
  "Games Lost",
  "Goals For",
  "Goals Against",
  "Goal Difference",
  "Points",
];

export default function TableHeaders() {
  return (
    <>
      {headers.map((header) => (
        <div
          className="flex justify-center items-center px-0.75 border-x border-black bg-blue-400"
          key={header}
        >
          <label className="whitespace-nowrap text-center h-[3vh]" key={header}>
            {header}
          </label>
        </div>
      ))}
    </>
  );
}
