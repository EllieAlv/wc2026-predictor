import { useSelector } from "react-redux";

export default function TableTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-start mt-[7vh] mx-[20vw]">
        <label className="font-bold text-xl">
          {children}
        </label>
      </div>
      <div className="mx-[20vw] h-[0.25vh] bg-black"></div>
    </>
  );
}
