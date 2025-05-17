"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    // Otherwise check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark-mode", isDarkMode)
    // Save preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="theme-toggle"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={20} className="theme-toggle-icon" /> : <Moon size={20} className="theme-toggle-icon" />}
      <style jsx>{`
        .theme-toggle {
          background: transparent;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast);
        }
        
        .theme-toggle:hover {
          background-color: var(--color-hover);
        }
        
        .theme-toggle-icon {
          transition: transform var(--transition-normal);
        }
        
        .theme-toggle:hover .theme-toggle-icon {
          transform: rotate(15deg);
        }
      `}</style>
    </button>
  )
}

export default ThemeToggle
