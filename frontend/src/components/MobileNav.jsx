export default function MobileNav({ activeSection, scrollToSection, darkMode, sectionRefs }) {
    return (
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div
          className={`rounded-xl shadow-xl py-2 flex flex-wrap justify-center gap-2 ${
            darkMode ? "bg-gray-800/60" : "bg-white/60"
          } backdrop-blur`}
        >
          {Object.keys(sectionRefs).map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1 text-xs rounded ${
                activeSection === id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  }
  