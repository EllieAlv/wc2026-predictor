"use client";

import { ReactNode } from "react";

interface ButtonProps {
  onButtonClick: (group: string) => void;
  cssClasses: string;
  children: ReactNode;
}

export default function Button({
  onButtonClick,
  cssClasses,
  children,
}: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    onButtonClick(e.currentTarget.textContent);
  }

  return (
    <button onClick={handleClick} className={cssClasses + " py-2 px-5 m-0.5"}>
      {children}
    </button>
  );
}
