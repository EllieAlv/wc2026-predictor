import Image from "next/image"
import logo from "../public/wc2026whitelogo.svg"

export default function MainHeader() {
  return (
    <header className="text-white">
      <div className="flex justify-center items-center bg-[#044A80] h-[6vh]">
        <Image src={logo} alt="Logo of FIFA's 2026 World Cup" height={40} width={80} className="h-14 w-15"/>
        <h1 className="font-bold text-2xl">FIFA World Cup 26™ predictor</h1>
      </div>
    </header>
  );
}
