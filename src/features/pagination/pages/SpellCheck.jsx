import React, { useEffect, useState } from "react";

export const SpellCheck = () => {
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };
  const [suggestion, setSuggestion] = useState("");
  const [input, setInput] = useState("");
  const handleSpellCheck = () => {
    const arr = input.split(" ");
    console.log(arr);
    if (arr.length == 0) {
      setSuggestion("");
    } else {
      for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        if (customDictionary[word]) {
          setSuggestion(arr[i]);
          break;
        }
        setSuggestion("");
      }
    }
  };
  useEffect(() => {
    console.log("hit");
    const timer = setTimeout(() => {
      handleSpellCheck(input);
    }, 1000);

    return () => clearTimeout(timer); // 🔥 cleanup function
  }, [input]);
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows={10}
        cols={50}
        placeholder="Enter text..."
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      {suggestion && <p>{`Did you mean: ${suggestion}?`}</p>}
    </div>
  );
};
