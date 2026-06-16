"use client";
import { useEffect, useState } from "react";

const commands = [
  { action: "BUY 100", key: "Shift+1" },
  { action: "BUY 200", key: "Shift+2" },
  { action: "SELL 100", key: "Meta+1" },
  { action: "EXIT ALL", key: "Meta+z" }
];

// Map code to display character for keyboard keys
const codeToKey: Record<string, string> = {
  "Digit1": "1", "Digit2": "2", "Digit3": "3", "Digit4": "4", "Digit5": "5",
  "Digit6": "6", "Digit7": "7", "Digit8": "8", "Digit9": "9", "Digit0": "0",
  "KeyZ": "z", "KeyX": "x", "KeyC": "c", "KeyV": "v",
};

export default function Page() {
  const [cmd, setCmd] = useState(commands[0]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      // Map code to actual key character
      const keyChar = codeToKey[e.code] || e.key.toLowerCase();
      const pressed =
        (e.shiftKey ? "Shift+" : "") +
        (e.metaKey ? "Meta+" : "") +
        (e.ctrlKey ? "Ctrl+" : "") +
        keyChar;

      if (pressed === cmd.key) {
        setScore((s) => s + 100);
        setCmd(commands[Math.floor(Math.random() * commands.length)]);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cmd]);

  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>Trader Aim Lab</h1>
      <h2>{cmd.action}</h2>
      <p>Press: {cmd.key}</p>
      <h3>Score: {score}</h3>
    </main>
  );
}