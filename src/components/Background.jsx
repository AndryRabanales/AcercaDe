export default function Background({ darkMode, mouseParallaxX, mouseParallaxY }) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            darkMode
              ? "bg-gradient-to-br from-indigo-900 via-black to-gray-40"
              : "bg-gradient-to-br from-gray-500 via-indigo-50 to-gray-500"
          }`}
        ></div>
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mouseParallaxX * 2}px, ${mouseParallaxY * 2}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mouseParallaxX * 3}px, ${-mouseParallaxY * 3}px)`,
          }}
        ></div>
      </div>
    );
  }
  