import { useSelector } from "react-redux";

export default function TableTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-start mt-[7vh]">
        <label className="font-bold text-xl">
          {children}
        </label>
      </div>
      <div className="h-[0.25vh] bg-black"></div>
    </>
  );
}
