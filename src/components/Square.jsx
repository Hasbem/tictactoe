import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <div>
      <button
        onClick={onSquareClick}
        className="border border-gray-500 size-10"
      >
        {value}
      </button>
    </div>
  );
}
