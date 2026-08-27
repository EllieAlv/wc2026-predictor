export default function TableTitle({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="flex justify-start shrink-0 mt-18 h-7 border-b-[3] border-b-black">
      <label className="font-bold text-xl">{children}</label>
    </div>
  );
}
