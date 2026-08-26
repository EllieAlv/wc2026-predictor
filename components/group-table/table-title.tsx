export default function TableTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-start mt-18 h-7 border-b-[3] border-b-black">
      <label className="font-bold text-xl">{children}</label>
    </div>
  );
}
