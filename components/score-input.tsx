"use client";

import { RootState } from "../lib/store";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { useState } from "react";

export default function ScoreInput(): React.JSX.Element {
  //const savedScore:
  const [inputValue, setInputValue] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const enteredValue: string = e.target.value;
    const numericValue: string = enteredValue.replace(/[^0-9]/g, "");
    
    setInputValue(numericValue);
  }

  function handleInputBlur() {}

  return (
    <input
      className="bg-white border-black text-center w-9"
      type="text"
      inputMode="numeric"
      placeholder="0"
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      value={inputValue}
    ></input>
  );
}
