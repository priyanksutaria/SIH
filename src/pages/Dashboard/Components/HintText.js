import React from "react";
import { useState, useEffect } from 'react';

function useTypewriter(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset displayed text when input changes

    if (!text || text.length === 0) return; // Guard clause for empty or undefined text

    // Immediately append the first character
    setDisplayedText(text.charAt(0));

    let index = 0; // Start from the second character since the first is already added
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index)); // Append the correct character
      index++;
      if (index >= text.length) {
        clearInterval(intervalId); // Clear interval when finished
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup the interval
  }, [text, speed]);

  return displayedText;
}



export function HintText({ hint, dialogue }) {
    const displayedDialogue = useTypewriter(dialogue || hint, 30); // Typewriter effect
  
    return (
      <div style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '20px' }}>
        {displayedDialogue}
      </div>
    );
  }