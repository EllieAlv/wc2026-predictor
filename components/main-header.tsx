import Image from "next/image"
import logo from "../public/images/wc2026whitelogo.svg"

export default function MainHeader() {
  return (
    <header>
      <div className="flex justify-center items-center bg-[#044A80] h-11">
        <Image src={logo} alt="Logo of FIFA's 2026 World Cup" height={40} width={80} className="h-11 w-15"/>
        <h1 className="font-bold text-2xl text-white">FIFA World Cup 26™ predictor</h1>
      </div>
    </header>
  );
}
