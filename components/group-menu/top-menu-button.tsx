"use client";

import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const [buttonClasses, setButtonClasses] = useState("text-white bg-[#000000]");

  function handleMouseOver() {
    setButtonClasses("text-white bg-[#1A1A1A]");
  }

  function handleMouseOut() {
    setButtonClasses("text-white bg-[#000000]");
  }

  function handleClick() {
    setButtonClasses("text-red-500 bg-[#1A1A1A]");
  }

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className={buttonClasses + " py-2 px-5 m-0.5"}
    >
      {children}
    </button>
  );
}
