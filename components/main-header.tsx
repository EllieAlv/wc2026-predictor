import Image from "next/image";

export default function MainHeader(): React.JSX.Element {
  return (
    <header>
      <div className="w-dvw flex justify-center items-center bg-[#044A80] h-11">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/wc2026whitelogo.svg`}
          alt="Logo of FIFA's 2026 World Cup"
          height={40}
          width={80}
          className="h-11 w-15"
        />
        <h1 className="font-bold text-2xl text-white">
          FIFA World Cup 26™ predictor
        </h1>
      </div>
    </header>
  );
}
