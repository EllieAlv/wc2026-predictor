const headers: string[] = ["Match ID","Date","Team 1","Score","Team 2","Location"]

export default function GroupGamesHeader():React.JSX.Element {
    return <div className="grid grid-cols-[repeat(2,1fr)_2fr_1fr_2fr_1fr] grid-flow-col mb-1 lg:mx-10 xl:mx-20">
        {headers.map((header: string, index: number)=><label key={index}>{header}</label>)}
    </div>
}