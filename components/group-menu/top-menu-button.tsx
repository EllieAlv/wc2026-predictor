"use client";

import { ReactNode } from "react";

interface ButtonProps {
  onButtonClick: (group: string) => void;
  onButtonMouseOver: (button: string) => void;
  onButtonMouseOut: () => void;
  cssClasses: string;
  children: ReactNode;
}

export default function Button({
  onButtonClick,
  onButtonMouseOver,
  onButtonMouseOut,
  cssClasses,
  children,
}: ButtonProps) {
  
  function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>) {
    onButtonMouseOver(e.currentTarget.textContent);
  }

  function handleMouseOut() {
    onButtonMouseOut();
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    onButtonClick(e.currentTarget.textContent);
  }

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className={cssClasses + " py-2 px-5 m-0.5"}
    >
      {children}
    </button>
  );
}
