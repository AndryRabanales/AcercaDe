export default function ContactForm({ darkMode }) {
  return (
    <section id="contacto" className="mb-40 flex justify-center items-center px-4">
      <div
        className={`w-full max-w-3xl p-8 rounded-3xl shadow-2xl backdrop-blur border ${
          darkMode
            ? "bg-black/30 border-white/20 text-white"
            : "bg-white/40 border-gray-300 text-gray-900"
        } animate-fade-in transition-colors duration-500`}
      >
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg ${
            darkMode
              ? "bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"
          }`}
        >
          Contáctanos
        </h2>
        <p
          className={`text-center mb-8 text-base md:text-lg transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Estamos listos para llevar tu proyecto al siguiente nivel
        </p>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className={`p-4 rounded-xl transition hover:scale-105 ${
              darkMode
                ? "bg-black/50 text-white placeholder-gray-400 focus:ring-purple-500"
                : "bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-purple-400"
            } focus:outline-none focus:ring-4`}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className={`p-4 rounded-xl transition hover:scale-105 ${
              darkMode
                ? "bg-black/50 text-white placeholder-gray-400 focus:ring-purple-500"
                : "bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-purple-400"
            } focus:outline-none focus:ring-4`}
          />
          <textarea
            placeholder="Cuéntanos más sobre tu proyecto..."
            rows="5"
            className={`p-4 rounded-xl transition hover:scale-105 ${
              darkMode
                ? "bg-black/50 text-white placeholder-gray-400 focus:ring-purple-500"
                : "bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-purple-400"
            } focus:outline-none focus:ring-4`}
          ></textarea>
          <button
            type="submit"
            className={`relative inline-block px-8 py-4 rounded-full font-semibold overflow-hidden shadow-xl hover:scale-105 transition
              before:absolute before:inset-0 before:rounded-full before:opacity-0 hover:before:opacity-20 before:transition
              ${
                darkMode
                  ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              }`}
          >
            <span className="relative z-10">Enviar mensaje</span>
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
