"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 px-4">

      <button
        onClick={() => setTheme("light")}
        className={`
          flex items-center gap-2 px-4 py-5 rounded-xs border transition-all duration-300 w-full cursor-pointer
          ${
            theme === "light"
              ? "bg-white text-black border-emerald-500 shadow-md"
              : "bg-zinc-100 text-zinc-600 border-zinc-300 hover:border-zinc-400"
          }
        `}
      >
        <div
          className={`
            w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200
            ${
              theme === "light" 
                ? "border-emerald-500 bg-emerald-500"
                : "border-zinc-500 bg-transparent"
            }
          `}
        >
          {theme === "light" && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-3.5 h-3.5"
            >
              <path 
                fillRule="evenodd" 
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" 
                clipRule="evenodd" 
              />
            </svg>
          )}
        </div>

        <span className="text-md font-bold">Default</span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`
          flex items-center gap-2 px-4 py-5 rounded-xs border transition-all duration-300 w-full cursor-pointer
          ${
            theme === "dark"
              ? "bg-black text-white border-emerald-500 shadow-md"
              : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500"
          }
        `}
      >
        <div
          className={`
            w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200
            ${
              theme === "dark"
                ? "border-emerald-500 bg-emerald-500"
                : "border-zinc-500 bg-transparent"
            }
          `}
        >
          {theme === "dark" && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-3.5 h-3.5"
            >
              <path 
                fillRule="evenodd" 
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" 
                clipRule="evenodd" 
              />
            </svg>
          )}
        </div>

        <span className="text-md font-bold">Lights out</span>
      </button>
    </div>
  );
}