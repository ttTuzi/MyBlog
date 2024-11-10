"use client";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function TypingAnimation({ text, duration = 200, className }) {
  const [showLink, setShowLink] = useState(false);

  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
        setShowLink(true);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <>
      <h1
        className={cn(
          "font-display text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
          className
        )}
      >
        {displayedText ? displayedText : text}
      </h1>
      {showLink && (
        <Link
          to="/about"
          className="font-display font-display text-lg font-bold leading-[2rem] tracking-[-0.02em] drop-shadow-sm hover:text-orange-500 transition-colors duration-300"
        >
          More...
        </Link>
      )}
    </>
  );
}
