export default function ContactForm({ darkMode }) {
    return (
      <section id="contacto" className="mb-40">
        <h2 className="text-5xl font-bold mb-10">Contáctanos</h2>
        <form
          className={`w-full px-4 max-w-3xl mx-auto flex flex-col gap-4 p-4 rounded ${
            darkMode ? "" : "border border-gray-900"
          } bg-white/20 backdrop-blur`}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="p-4 rounded bg-white/70 backdrop-blur text-gray-900 placeholder-gray-900"
          />
          <input
            type="email"
            placeholder="Correo"
            className="p-4 rounded bg-white/70 backdrop-blur text-gray-900 placeholder-gray-900"
          />
          <textarea
            placeholder="Mensaje"
            rows="5"
            className="p-4 rounded bg-white/70 backdrop-blur text-gray-900 placeholder-gray-900"
          ></textarea>
          <button
            type="submit"
            className="p-4 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
  