import React from "react";

export default function Header({ activeSection, toggleDarkMode, darkMode, scrollToSection }) {
  
  // mover la condición aquí, ya que darkMode llega como prop
  const titleGradient = darkMode
    ? "bg-gradient-to-r from-red-300 via-gray-300 to-red-400"
    : "bg-gradient-to-r from-red-900 via-zinc-600 to-red-900";
  
  return (
    <header
      className={`sticky top-0 z-40 border-b shadow-2xl transition-all duration-500 ${
        darkMode
          ? "bg-black/30 backdrop-blur-xl border-white/10"
          : "bg-white/30 backdrop-blur-xl border-black/10"
      }`}
    >
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-5">
        <div className="max-h-14 w-14 rounded-full bg-white/70 shadow flex items-center justify-center overflow-hidden animate-tilt-slow">
  <img
    src="/log.png"
    alt="logo"
    className="h-full w-full object-cover"
  />
</div>

          <h1 className={`text-3xl font-black ${titleGradient} text-transparent bg-clip-text animate-pulse`}>
            Dev & Market
          </h1>
        </div>
        <ul className="hidden md:flex space-x-8">
         
        </ul>
        <button
          onClick={toggleDarkMode}
          className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition"
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-yellow-100 transition-transform ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </nav>
    </header>
  );
}
